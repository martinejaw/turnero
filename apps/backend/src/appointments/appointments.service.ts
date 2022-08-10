import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  create(createAppointmentDto: CreateAppointmentDto) {
    return this.prisma.appointment.create({ data: createAppointmentDto });
  }

  findAll() {
    return this.prisma.appointment.findMany();
  }

  findOne(id: number) {
    return this.prisma.appointment.findUnique({ where: { id } });
  }
}
