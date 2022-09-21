import { createSelector } from '@ngrx/store';
import { selectBranches } from '../..';

export const selectBranchesCount = createSelector(selectBranches, (branches) =>
  branches ? branches.length : 0
);
