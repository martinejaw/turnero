import { CreateAvailabilityDto } from 'src/availabilities/dto/create-availabilities-dto';

export class CreateAppointmentGroupDto {
  name: string;
  description?: string;
  public?: boolean;
  sectionId: number;
  availabilities?: CreateAvailabilityDto[];
}
