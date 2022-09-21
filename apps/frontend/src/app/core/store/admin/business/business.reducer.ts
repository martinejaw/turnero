import { createReducer, on } from '@ngrx/store';
import { Business } from './business.type';
import { login, logout } from '../user/user.actions';

export type BusinessState = Business | undefined;

export const initialState: BusinessState = undefined;

export const businessReducer = createReducer(
  initialState as BusinessState,
  on(login, (_, action) => action.business),
  on(logout, (_, action) => undefined)
);
