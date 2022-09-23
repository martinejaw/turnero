import { Module } from '@nestjs/common';
import { AppointmentGroupsService } from './appointment-groups.service';
import { AppointmentGroupsController } from './appointment-groups.controller';
import { AvailabilitiesService } from 'src/availabilities/availabilities.service';

@Module({
  controllers: [AppointmentGroupsController],
  providers: [AppointmentGroupsService, AvailabilitiesService],
  exports: [AppointmentGroupsService],
})
export class AppointmentGroupsModule {}
