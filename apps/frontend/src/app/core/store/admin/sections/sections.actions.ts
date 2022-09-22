import { createAction, props } from '@ngrx/store';
import { Section } from './sections.type';

export const addSection = createAction(
  '[Section] Add section',
  props<{ section: Section }>()
);

export const editSection = createAction(
  '[Section] Edit section',
  props<{ section: Section }>()
);

export const deleteSection = createAction(
  '[Section] Delete section',
  props<{ id: number }>()
);
