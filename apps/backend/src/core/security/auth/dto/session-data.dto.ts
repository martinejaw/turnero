import { Business, User } from '@prisma/client';

export interface SessionDataDto {
  user: Omit<User, 'password'>;
  business: Business;
}