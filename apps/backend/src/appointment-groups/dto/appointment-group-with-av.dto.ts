import { AppointmentGroup, Availability } from '@prisma/client';

export type AppointmentGroupWithAvailabilityDto = AppointmentGroup & {
  availabilities: Availability[];
};
