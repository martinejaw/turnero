import { createAction, props } from '@ngrx/store';
import { Branch } from './branches.type';

export const addBranch = createAction(
  '[Branch Slice] Add branch',
  props<{ branch: Branch }>()
);

export const deleteBranch = createAction(
  '[Branch Slice] Delete branch',
  props<{ id: number }>()
);
