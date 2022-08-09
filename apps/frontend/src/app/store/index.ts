import { createSelector } from '@ngrx/store';
import { userReducer, UserState } from './user/user.reducer';

export interface AppState {
  userSlice: UserState;
}

export const rootState = { userSlice: userReducer };

export const selectUserSlice = (state: AppState) => state.userSlice;
export const selectUser = createSelector(
  selectUserSlice,
  (state: UserState) => state.user
);
