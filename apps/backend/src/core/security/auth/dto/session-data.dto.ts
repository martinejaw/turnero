import { Branch, Business, User } from '@prisma/client';
import { Section } from 'src/sections/entities/section.entity';

export type SessionDto = {
  accessToken: string;
  data: SessionData;
};

export interface SessionData {
  user: Omit<User, 'password'>;
  business: Business;
  branches: Branch[];
  sections: Section[];
}
