import { createAction, props } from '@ngrx/store';
import { User } from './user.type';

export const login = createAction(
  '[User State] Login',
  props<{ user: User }>()
);
