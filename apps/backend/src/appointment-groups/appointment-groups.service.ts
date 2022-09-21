import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateAppointmentGroupDto } from './dto/create-appointment-group.dto';

@Injectable()
export class AppointmentGroupsService {
  constructor(private prisma: PrismaService) {}

  create(createAppointmentGroupDto: CreateAppointmentGroupDto) {
    const { sectionId, ...createAppointmentData } = createAppointmentGroupDto;
    return this.prisma.appointmentGroup.create({
      data: {
        ...createAppointmentData,
        section: { connect: { id: sectionId } },
      },
    });
  }

  findAll() {
    return this.prisma.appointmentGroup.findMany();
  }

  findOne(id: number) {
    return this.prisma.appointmentGroup.findUnique({ where: { id } });
  }

  findBy(where: Prisma.AppointmentGroupWhereInput) {
    return this.prisma.appointmentGroup.findMany({ where });
  }
}
