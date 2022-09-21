import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { EditBranchDto } from './dto/edit-branch.dto';

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

  deleteBy(id: number) {
    try {
      let sectionsDeletedByBranch = this.prisma.section.deleteMany({
        where: { branchId: id },
      });
      let branchDeleted = this.prisma.branch.delete({ where: { id } });

      return this.prisma.$transaction([sectionsDeletedByBranch, branchDeleted]);
    } catch {
      console.log('Error en el borrado de sucursal.');
    }
  }

  editOneBy(editBranchDto: EditBranchDto) {
    try {
      let { id, address } = editBranchDto;

      return this.prisma.branch.update({
        where: { id },
        data: { address },
      });
    } catch {
      console.log('Error al editar sucursal.');
    }
  }
}
