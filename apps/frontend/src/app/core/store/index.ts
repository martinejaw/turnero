import { createSelector } from '@ngrx/store';
import { adminReducer, AdminState } from './admin/admin.reducer';

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
