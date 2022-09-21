import { createSelector } from '@ngrx/store';
import { adminReducer, AdminState } from './admin/admin.reducer';
import { Branch } from './admin/branches/branches.type';

export interface AppState {
  adminSlice: AdminState;
}

export const rootState = {
  adminSlice: adminReducer,
};

export const selectAdminSlice = (state: AppState) => state.adminSlice;

export const selectUser = createSelector(
  selectAdminSlice,
  (state: AdminState) => state.user
);
export const selectBusiness = createSelector(
  selectAdminSlice,
  (state: AdminState) => state.business
);
export const selectBranches = createSelector(
  selectAdminSlice,
  (state: AdminState) => state.branches
);
export const selectSections = createSelector(
  selectAdminSlice,
  (state: AdminState) => state.sections
);

// Branches
export const selectSectionsByBranches = (id: number) =>
  createSelector(selectSections, (sections) =>
    sections ? sections.filter((section) => section.branchId === id) : []
  );
export const selectBranchesCount = createSelector(
  selectBranches,
  (branches: Branch[]) => (branches ? branches.length : 0)
);
