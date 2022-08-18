import { createSelector } from '@ngrx/store';
import { businessReducer, BusinessState } from './business/business.reducer';
import { userReducer, UserState } from './user/user.reducer';

export interface AppState {
  userSlice: UserState;
  businessSlice: BusinessState;
}

export const rootState = {
  userSlice: userReducer,
  businessSlice: businessReducer,
};

export const selectUserSlice = (state: AppState) => state.userSlice;
export const selectUser = createSelector(
  selectUserSlice,
  (state: UserState) => state.user
);
export const selectBusiness = createSelector(
  selectUserSlice,
  (state: BusinessState) => state.business
);
