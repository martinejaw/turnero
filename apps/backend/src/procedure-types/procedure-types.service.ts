import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateProcedureTypeDto } from './dto/create-procedure-type.dto';

@Injectable()
export class ProcedureTypesService {
  constructor(private prisma: PrismaService) {}

  create(createProcedureTypeDto: CreateProcedureTypeDto) {
    return this.prisma.procedureType.create({
      data: createProcedureTypeDto,
    });
  }

  findAll() {
    return this.prisma.procedureType.findMany();
  }

  findOne(id: number) {
    return this.prisma.procedureType.findUnique({ where: { id } });
  }
}
