import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateAppointmentGroupDto } from './dto/create-appointment-group.dto';

@Injectable()
export class AppointmentGroupsService {
  constructor(private prisma: PrismaService) {}

  create(createAppointmentGroupDto: CreateAppointmentGroupDto) {
    return this.prisma.appointmentGroup.create({
      data: createAppointmentGroupDto,
    });
  }

  findAll() {
    return this.prisma.appointmentGroup.findMany();
  }

  findOne(id: number) {
    return this.prisma.appointmentGroup.findUnique({ where: { id } });
  }
}
