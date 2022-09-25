import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateAvailabilityDto } from './dto/create-availabilities-dto';

@Injectable()
export class AvailabilitiesService {
  constructor(private prisma: PrismaService) {}

  create(createAvailabilitiesDto: CreateAvailabilityDto) {
    return this.prisma.availability.create({
      data: createAvailabilitiesDto,
    });
  }

  createMany(createAvailabilitiesDto: CreateAvailabilityDto[]) {
    return this.prisma.availability.createMany({
      data: createAvailabilitiesDto,
      skipDuplicates: true,
    });
  }

  deleteMany(appointmentGroupId: number) {
    return this.prisma.availability.deleteMany({
      where: { appointmentGroupId },
    });
  }
}
