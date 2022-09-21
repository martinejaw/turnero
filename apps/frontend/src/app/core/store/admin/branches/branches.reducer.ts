import { createReducer, on } from '@ngrx/store';
import { Branch } from './branches.type';
import { addBranch, deleteBranch, editBranch } from './branches.actions';
import { login, logout } from '../user/user.actions';

export type BranchesState = Branch[];
export const initialState: BranchesState = [];

// Nested reducer
export const branchesReducer = createReducer(
  initialState as BranchesState,
  on(login, (_, action) => action.branches),
  on(logout, () => initialState),
  on(addBranch, (state, action) => [...state, action.branch]),
  on(deleteBranch, (state, action) => {
    let branchesState = state.filter((branch) => branch.id !== action.id);
    return branchesState;
  }),
  on(editBranch, (state, action) => {
    let branchesState = state.map((branch) => {
      if (branch.id === action.branch.id) {
        return {
          ...branch,
          address: action.branch.address,
        };
      }

      return branch;
    });

    return branchesState;
  })
);
