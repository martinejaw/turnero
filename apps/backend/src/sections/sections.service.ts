import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { EditSectionDto } from './dto/edit-section.dto';

@Injectable()
export class SectionsService {
  constructor(private prisma: PrismaService) {}

  create(createSectionDto: CreateSectionDto) {
    return this.prisma.section.create({
      data: createSectionDto,
    });
  }

  findAll() {
    return this.prisma.section.findMany();
  }

  findOne(id: number) {
    return this.prisma.section.findUnique({ where: { id } });
  }

  findBy(where: Prisma.SectionWhereInput) {
    return this.prisma.section.findMany({ where });
  }

  deleteBy(id: number) {
    try {
      return this.prisma.section.delete({ where: { id } });
    } catch {
      console.log('Error al borrar la sección.');
    }
  }

  editOneBy(editSectionDto: EditSectionDto) {
    try {
      let { id, name, description } = editSectionDto;

      return this.prisma.section.update({
        where: { id },
        data: { name, description },
      });
    } catch {
      console.log('Error al editar sección.');
    }
  }
}
