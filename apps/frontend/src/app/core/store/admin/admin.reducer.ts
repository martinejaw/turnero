import { combineReducers } from '@ngrx/store';
import {
  appointmentGroupsReducer,
  AppointmentGroupState,
} from './appointmentGroups/appointment-groups.reducer';
import { branchesReducer, BranchesState } from './branches/branches.reducer';
import { businessReducer } from './business/business.reducer';
import { Business } from './business/business.type';
import { sectionsReducer } from './sections/sections.reducer';
import { Section } from './sections/sections.type';
import { userReducer } from './user/user.reducer';
import { User } from './user/user.type';

const userStateName = 'user';
const businessStateName = 'business';
const branchesStateName = 'branches';
const sectionsStateName = 'sections';
const appointmentGroupsStateName = 'appointmentGroups';

export type AdminState = {
  // loading: boolean;
  [userStateName]?: User;
  [businessStateName]?: Business;
  [branchesStateName]: BranchesState;
  [sectionsStateName]: Section[];
  [appointmentGroupsStateName]: AppointmentGroupState;
};

export const initialState: AdminState = {
  // loading: true,
  user: undefined,
  business: undefined,
  branches: [],
  sections: [],
  appointmentGroups: [],
};

export const adminReducer = combineReducers<AdminState>({
  [userStateName]: userReducer,
  [businessStateName]: businessReducer,
  [branchesStateName]: branchesReducer,
  [sectionsStateName]: sectionsReducer,
  [appointmentGroupsStateName]: appointmentGroupsReducer,
});
