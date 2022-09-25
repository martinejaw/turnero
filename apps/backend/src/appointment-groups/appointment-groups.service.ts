import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AvailabilitiesService } from 'src/availabilities/availabilities.service';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateAppointmentGroupDto } from './dto/create-appointment-group.dto';
import { EditAppointmentGroupDto } from './dto/edit-appointmet-group.dto';

@Injectable()
export class AppointmentGroupsService {
  constructor(
    private prisma: PrismaService,
    private availabilityService: AvailabilitiesService,
  ) {}

  async create(createAppointmentGroupDto: CreateAppointmentGroupDto) {
    const { sectionId, availabilities, ...createAppointmentData } =
      createAppointmentGroupDto;
    let newAppointmentGroup = await this.prisma.appointmentGroup.create({
      data: {
        ...createAppointmentData,
        section: { connect: { id: sectionId } },
        availabilities: {
          createMany: {
            data: availabilities ?? [],
          },
        },
      },
    });

    return this.findOne(newAppointmentGroup.id);
  }

  async editOneBy(editAppointmentGroupDto: EditAppointmentGroupDto) {
    try {
      let { id, name, description, availabilities } = editAppointmentGroupDto;
      let deletedAvaialabilities = this.availabilityService.deleteMany(
        editAppointmentGroupDto.id,
      );
      let editAppointmentGroup = this.prisma.appointmentGroup.update({
        where: { id },
        data: {
          name,
          description,
          public: editAppointmentGroupDto.public,
          availabilities: {
            createMany: {
              data: availabilities ?? [],
            },
          },
        },
      });

      await this.prisma.$transaction([
        deletedAvaialabilities,
        editAppointmentGroup,
      ]);

      return this.findOne(id);
    } catch (e) {
      console.log('Error al editar Appointment Group:', e);
    }
  }

  deleteOneBy(id: number) {
    return this.prisma.appointmentGroup.delete({
      where: { id },
    });
  }

  findAll() {
    return this.prisma.appointmentGroup.findMany({
      include: { availabilities: true },
    });
  }

  findOne(id: number) {
    return this.prisma.appointmentGroup.findUnique({
      where: { id },
      include: { availabilities: true },
    });
  }

  findBy(where: Prisma.AppointmentGroupWhereInput) {
    return this.prisma.appointmentGroup.findMany({
      where,
      include: { availabilities: true },
    });
  }
}
