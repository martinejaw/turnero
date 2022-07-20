import { User } from 'src/app/store/user/user.type';

export default interface LoginResponse {
  user: User;
  accessToken: string;
}
