import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { BranchesService } from 'src/branches/branches.service';
import { BusinessService } from 'src/business/business.service';
import { SectionsService } from 'src/sections/sections.service';
import { UsersService } from 'src/users/users.service';
import { SecurityService } from '../security.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { SessionData, SessionDto } from './dto/session-data.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private businessService: BusinessService,
    private branchesService: BranchesService,
    private sectionsService: SectionsService,
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

  async login(user: User): Promise<SessionDto> {
    const payload = { email: user.email, sub: user.id };

    return {
      accessToken: this.jwtTokenService.sign(payload),
      data: await this.getUserState(payload.sub),
    };
  }

  async retrieveState(
    accessToken: string,
  ): Promise<Omit<SessionDto, 'accessToken'>> {
    this.jwtTokenService.verify(accessToken);
    const payload = this.jwtTokenService.decode(accessToken);
    return { data: await this.getUserState(payload.sub) };
  }

  async getUserState(userId: number): Promise<SessionData> {
    const { password, ...user } = await this.usersService.findOne({
      id: userId,
    });
    const business = await this.businessService.findUnique({ userId: user.id });
    const branches = await this.branchesService.findBy({
      businessId: business.id,
    });
    const sections = await this.sectionsService.findBy({
      branchId: { in: branches.map((branch) => branch.id) },
    });

    return {
      user,
      business,
      branches,
      sections,
    };
  }
}
