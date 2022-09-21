import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Get,
  Param,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BusinessService } from 'src/business/business.service';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/auth-user.dto';
import { SessionDto } from './dto/session-data.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private businessService: BusinessService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('signup')
  async signup(@Body() signUpDto: SignUpDto) {
    const user = await this.userService.create(signUpDto);
    await this.businessService.create({
      name: signUpDto.businessName,
      userId: user.id,
    });

    return this.authService.login(user);
  }

  @Get('retrieve-state')
  async retrieveState(
    @Query('accessToken') accessToken: string,
  ): Promise<Omit<SessionDto, 'accessToken'>> {
    try {
      return await this.authService.retrieveState(accessToken);
    } catch {
      throw new HttpException('Invalid token', HttpStatus.BAD_REQUEST);
    }
  }
}
