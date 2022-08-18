import { User } from 'src/app/store/user/user.type';

export interface LoginResponse {
  user: User;
  business: Business;
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
}
