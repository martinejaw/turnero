import { Module } from '@nestjs/common';
import { AppointmentGroupsService } from './appointment-groups.service';
import { AppointmentGroupsController } from './appointment-groups.controller';

@Module({
  controllers: [AppointmentGroupsController],
  providers: [AppointmentGroupsService]
})
export class AppointmentGroupsModule {}
