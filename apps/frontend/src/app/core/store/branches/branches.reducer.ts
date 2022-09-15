import { createReducer, on } from '@ngrx/store';
import { Branch } from './branches.type';
import { login, logout } from '../user/user.actions';
import { addBranch, deleteBranch, editBranch } from './branches.actions';

export type BranchesState = { loading: boolean; branches: Branch[] };

export const initialState: BranchesState = {
  loading: true,
  branches: [],
};

export const branchesReducer = createReducer(
  initialState as BranchesState,
  on(login, (_, action) => ({
    loading: false,
    branches: action.branches,
  })),
  on(logout, () => initialState),
  on(addBranch, (state, action) => ({
    ...state,
    branches: [...state.branches, action.branch],
  })),
  on(deleteBranch, (state, action) => {
    let branchesState = state.branches.filter(
      (branch) => branch.id !== action.id
    );
    return { ...state, branches: branchesState };
  }),
  on(editBranch, (state, action) => {
    let branchesState = state.branches.map((branch) => {
      if (branch.id === action.branch.id) {
        return {
          ...branch,
          address: action.branch.address,
        };
      }

      return branch;
    });

    return { ...state, branches: branchesState };
  })
);
