import { createReducer, on } from '@ngrx/store';
import { Branch } from './branches.type';
import { login, logout } from '../user/user.actions';
import { addBranch } from './branches.actions';

export type BranchesState = { loading: boolean; branches: Branch[] };

export const initialState: BranchesState = {
  loading: true,
  branches: [],
};

export const branchesReducer = createReducer(
  initialState as BranchesState,
  on(login, (state, action) => ({
    loading: false,
    branches: action.branches,
  })),
  on(logout, (state, action) => ({
    loading: true,
    branches: [],
  })),
  on(addBranch, (state, action) => ({
    ...state,
    branches: [...state.branches, action.branch],
  }))
);
