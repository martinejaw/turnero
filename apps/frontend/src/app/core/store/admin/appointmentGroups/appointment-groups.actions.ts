import { createAction, props } from '@ngrx/store';
import { AppointmentGroup } from './appointment-groups.type';

export const addAppointmentGroup = createAction(
  '[Appointment Group] Add appointment group',
  props<{ appointmentGroup: AppointmentGroup }>()
);

export const deleteAppointmentGroup = createAction(
  '[Appointment Group] Delete appointment group',
  props<{ id: number }>()
);

export const editAppointmentGroup = createAction(
  '[Appointment Group] Edit appointment group',
  props<{ appointmentGroup: AppointmentGroup }>()
);
