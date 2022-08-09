import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateBusinessDto } from './dto/create-business.dto';

// TODO: use AuthGuards
@Injectable()
export class BusinessService {
  constructor(private prisma: PrismaService) {}

  create(createBusinessDto: CreateBusinessDto) {
    const { userId, ...businessData } = createBusinessDto;
    return this.prisma.business.create({
      data: {
        ...businessData,
        user: { connect: { id: userId } },
      },
    });
  }

  findAll() {
    return this.prisma.business.findMany();
  }

  findOne(id: number) {
    return this.prisma.business.findUnique({ where: { id } });
  }
}
