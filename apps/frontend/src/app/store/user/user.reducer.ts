import { createReducer, on } from '@ngrx/store';
import { login } from './user.actions';
import { User } from './user.type';

type LoadingState = { loading: true };
type LoadedState = { loading: false; user: User };
export type UserState = LoadedState | LoadingState;

export const initialState: UserState = {
  loading: true,
};

export const userReducer = createReducer(
  initialState as UserState,
  on(login, (state, action) => ({
    ...state,
    loading: false,
    user: action.user,
  }))
);
