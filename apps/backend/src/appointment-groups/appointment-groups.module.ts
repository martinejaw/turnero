import { Module } from '@nestjs/common';
import { AppointmentGroupsService } from './appointment-groups.service';
import { AppointmentGroupsController } from './appointment-groups.controller';

@Module({
  controllers: [AppointmentGroupsController],
  providers: [AppointmentGroupsService],
  exports: [AppointmentGroupsService],
})
export class AppointmentGroupsModule {}
