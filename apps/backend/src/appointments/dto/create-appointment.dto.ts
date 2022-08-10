import { IsDateString } from 'class-validator';

export class CreateAppointmentDto {
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  phoneNumber: string;
  details: string;

  @IsDateString()
  date: Date;

  procedureTypeId: number;
}
