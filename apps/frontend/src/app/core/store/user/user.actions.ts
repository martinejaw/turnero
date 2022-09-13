import { createAction, props } from '@ngrx/store';
import { Branch } from '../branches/branches.type';
import { Business } from '../business/business.type';
import { User } from './user.type';

export const login = createAction(
  '[User State] Login',
  props<{ user: User; business: Business; branches: Branch[] }>()
);

export const logout = createAction('[User State] Logout');