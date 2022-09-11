import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';

@Injectable()
export class BranchesService {
  constructor(private prisma: PrismaService) {}

  create(createBranchDto: CreateBranchDto) {
    return this.prisma.branch.create({
      data: createBranchDto,
    });
  }

  findAll() {
    return this.prisma.branch.findMany();
  }

  findOne(id: number) {
    return this.prisma.branch.findUnique({ where: { id } });
  }

  findBy(where: Prisma.BranchWhereInput) {
    return this.prisma.branch.findMany({ where });
  }
}
