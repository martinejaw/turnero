import { createSelector } from '@ngrx/store';
import { selectAppointmentGroups } from '../..';

export const selectAppointmentGroupsBySection = (idSection: number) =>
  createSelector(selectAppointmentGroups, (appointmentGroups) =>
    appointmentGroups.filter((group) => group.sectionId == idSection)
  );
