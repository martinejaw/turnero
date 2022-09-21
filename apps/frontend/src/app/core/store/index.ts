import { createSelector } from '@ngrx/store';
import { branchesReducer, BranchesState } from './branches/branches.reducer';
import { businessReducer, BusinessState } from './business/business.reducer';
import { sectionsReducer, SectionsState } from './sections/sections.reducer';
import { userReducer, UserState } from './user/user.reducer';

export interface AppState {
  userSlice: UserState;
  businessSlice: BusinessState;
  branchesSlice: BranchesState;
  sectionsSlice: SectionsState;
}

export const rootState = {
  userSlice: userReducer,
  businessSlice: businessReducer,
  branchesSlice: branchesReducer,
  sectionsSlice: sectionsReducer,
};

export const selectUserSlice = (state: AppState) => state.userSlice;
export const selectBusinessSlice = (state: AppState) => state.businessSlice;
export const selectBranchesSlice = (state: AppState) => state.branchesSlice;
export const selectSectionsSlice = (state: AppState) => state.sectionsSlice;

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
export const selectSections = createSelector(
  selectSectionsSlice,
  (state: SectionsState) => state.sections
);
export const selectSectionsByBranches = (id: number) =>
  createSelector(selectSectionsSlice, (state) =>
    state.sections
      ? state.sections.filter((section) => section.branchId === id)
      : []
  );
export const selectBranchesCount = createSelector(
  selectBranchesSlice,
  (state: BranchesState) => (state.branches ? state.branches.length : 0)
);
