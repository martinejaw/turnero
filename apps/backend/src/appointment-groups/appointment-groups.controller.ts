import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { AppointmentGroupsService } from './appointment-groups.service';
import { CreateAppointmentGroupDto } from './dto/create-appointment-group.dto';

@Controller('appointment-groups')
export class AppointmentGroupsController {
  constructor(
    private readonly appointmentGroupsService: AppointmentGroupsService,
  ) {}

  @Post()
  create(@Body() createAppointmentGroupDto: CreateAppointmentGroupDto) {
    return this.appointmentGroupsService.create(createAppointmentGroupDto);
  }

  @Get()
  findAll() {
    return this.appointmentGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentGroupsService.findOne(+id);
  }
}
