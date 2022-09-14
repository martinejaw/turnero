import { createReducer, on } from '@ngrx/store';
import { login, logout } from './user.actions';
import { User } from './user.type';

export type UserState = { loading: boolean; user?: User };

export const initialState: UserState = {
  loading: true,
  user: undefined,
};

export const userReducer = createReducer(
  initialState as UserState,
  on(login, (state, action) => ({
    ...state,
    loading: false,
    user: action.user,
  })),
  on(logout, () => initialState)
);
