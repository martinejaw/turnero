import { IsString } from 'class-validator';

export class CreateProcedureTypeDto {
  @IsString()
  name: string;
  duration: number;
  appointmentGroupId: number;
}
