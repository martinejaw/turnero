import { CreateAvailabilityDto } from 'src/availabilities/dto/create-availabilities-dto';

export class EditAppointmentGroupDto {
  id: number;
  name: string;
  description?: string;
  public: boolean;
  availabilities?: CreateAvailabilityDto[];
}
