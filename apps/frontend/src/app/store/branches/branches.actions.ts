import { createAction, props } from '@ngrx/store';
import { Branch } from './branches.type';

export const addBranch = createAction(
  '[Branch Slice] Add branch',
  props<{ branch: Branch }>()
);
