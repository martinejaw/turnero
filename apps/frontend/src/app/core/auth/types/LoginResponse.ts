import { Branch } from '../../store/branches/branches.type';
import { User } from '../../store/user/user.type';

export interface LoginResponse {
  user: User;
  business: Business;
  branches: Branch[];
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
}
