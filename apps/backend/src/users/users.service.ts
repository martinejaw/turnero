import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { SecurityService } from 'src/core/security/security.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private securityService: SecurityService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    const hashedPassword = await this.securityService.hash(password);

    return this.prisma.user.create({
      data: { email, password: hashedPassword },
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ data: updateUserDto, where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
