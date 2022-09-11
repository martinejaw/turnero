import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { BranchesService } from 'src/branches/branches.service';
import { BusinessService } from 'src/business/business.service';
import { UsersService } from 'src/users/users.service';
import { SecurityService } from '../security.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { SessionDataDto } from './dto/session-data.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private businessService: BusinessService,
    private branchesService: BranchesService,
    private jwtTokenService: JwtService,
    private securityService: SecurityService,
  ) {}

  async validateUserCredentials(
    email: string,
    password: string,
  ): Promise<AuthUserDto | null> {
    const user = await this.usersService.findOne({ email });

    if (user && (await this.securityService.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginWithCredentials(user: User) {
    const payload = { email: user.email, sub: user.id };
    const { password, ...userDto } = user;

    const business = await this.businessService.findUnique({ userId: user.id });
    const branches = await this.branchesService.findBy({
      businessId: business.id,
    });

    return {
      user: userDto,
      business,
      branches,
      accessToken: this.jwtTokenService.sign(payload),
    };
  }

  async retrieveState(accessToken: string): Promise<SessionDataDto> {
    this.jwtTokenService.verify(accessToken);
    const payload = this.jwtTokenService.decode(accessToken);
    const { sub: userId } = payload;

    const user = await this.usersService.findOne({ id: userId });
    const business = await this.businessService.findUnique({ userId: user.id });
    const branches = await this.branchesService.findBy({
      businessId: business.id,
    });

    return {
      user,
      business,
      branches,
    };
  }
}
