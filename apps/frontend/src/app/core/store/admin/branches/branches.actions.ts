import { createAction, props } from '@ngrx/store';
import { Branch } from './branches.type';

export const addBranch = createAction(
  '[Branch] Add branch',
  props<{ branch: Branch }>()
);

export const deleteBranch = createAction(
  '[Branch] Delete branch',
  props<{ id: number }>()
);

export const editBranch = createAction(
  '[Branch] Edit branch',
  props<{ branch: Branch }>()
);
