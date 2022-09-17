import { Branch } from '../../store/branches/branches.type';
import { Section } from '../../store/sections/sections.type';
import { User } from '../../store/user/user.type';

export interface LoginResponse {
  user: User;
  business: Business;
  branches: Branch[];
  sections: Section[];
  accessToken: string;
}

interface Business {
  id: number;
  name: string;
}

export interface SignUpResponse {
  user: User;
  accessToken: string;
  business: Business;
  branches: Branch[];
  sections: Section[];
}
