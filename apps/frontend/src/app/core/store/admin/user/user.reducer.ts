import { createReducer, on } from '@ngrx/store';
import { login, logout } from './user.actions';
import { User } from './user.type';

export type UserState = User | undefined;
export const initialState: UserState = undefined;

export const userReducer = createReducer(
  initialState as UserState,
  on(login, (_, action) => action.user),
  on(logout, () => initialState)
);
