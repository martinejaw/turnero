import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { SecurityService } from '../security.service';
import { AuthUserDto } from './dto/auth-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
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

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
