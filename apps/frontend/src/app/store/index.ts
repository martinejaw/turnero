import { createSelector } from '@ngrx/store';
import { branchesReducer, BranchesState } from './branches/branches.reducer';
import { businessReducer, BusinessState } from './business/business.reducer';
import { userReducer, UserState } from './user/user.reducer';

export interface AppState {
  userSlice: UserState;
  businessSlice: BusinessState;
  branchesSlice: BranchesState;
}

export const rootState = {
  userSlice: userReducer,
  businessSlice: businessReducer,
  branchesSlice: branchesReducer,
};

export const selectUserSlice = (state: AppState) => state.userSlice;
export const selectBusinessSlice = (state: AppState) => state.businessSlice;
export const selectBranchesSlice = (state: AppState) => state.branchesSlice;

export const selectUser = createSelector(
  selectUserSlice,
  (state: UserState) => state.user
);
export const selectBusiness = createSelector(
  selectBusinessSlice,
  (state: BusinessState) => state.business
);
export const selectBranches = createSelector(
  selectBranchesSlice,
  (state: BranchesState) => state.branches
);
