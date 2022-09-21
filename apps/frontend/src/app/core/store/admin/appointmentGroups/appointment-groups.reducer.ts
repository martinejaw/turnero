import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../user/user.actions';
import {
  addAppointmentGroup,
  deleteAppointmentGroup,
  editAppointmentGroup,
} from './appointment-groups.actions';
import { AppointmentGroup } from './appointment-groups.type';

export type AppointmentGroupState = AppointmentGroup[];
export const initialState: AppointmentGroupState = [];

// Nested reducer
export const appointmentGroupsReducer = createReducer(
  initialState as AppointmentGroupState,
  on(login, (_, action) => action.appointmentGroups),
  on(logout, () => initialState),
  on(addAppointmentGroup, (state, action) => [
    ...state,
    action.appointmentGroup,
  ]),
  on(deleteAppointmentGroup, (state, action) => {
    let appointmentGroupsState = state.filter(
      (appointmentGroup) => appointmentGroup.id !== action.id
    );
    return appointmentGroupsState;
  }),
  on(editAppointmentGroup, (state, action) => {
    let appointmentGroupsState = state.map((appointmentGroup) => {
      if (appointmentGroup.id === action.appointmentGroup.id) {
        return {
          ...appointmentGroup,
          name: action.appointmentGroup.name,
          description: action.appointmentGroup.description,
          public: action.appointmentGroup.public,
        };
      }

      return appointmentGroup;
    });

    return appointmentGroupsState;
  })
);
