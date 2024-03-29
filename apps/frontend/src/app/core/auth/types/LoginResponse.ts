import { Branch } from 'src/app/core/store/admin/branches/branches.type';
import { Section } from 'src/app/core/store/admin/sections/sections.type';
import { User } from 'src/app/core/store/admin/user/user.type';
import { AppointmentGroup } from '../../store/admin/appointmentGroups/appointment-groups.type';

export interface SessionData {
  user: User;
  business: Business;
  branches: Branch[];
  sections: Section[];
  appointmentGroups: AppointmentGroup[];
}
export interface LoginResponse {
  accessToken: string;
  data: SessionData;
}

interface Business {
  id: number;
  name: string;
}

export type SignUpResponse = LoginResponse;
