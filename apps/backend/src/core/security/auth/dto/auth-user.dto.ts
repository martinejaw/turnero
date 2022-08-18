import { OmitType } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class AuthUserDto extends OmitType(CreateUserDto, ['password']) {}

export interface SignUpDto {
  email: string;
  password: string;
  businessName: string;
}
