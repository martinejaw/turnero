import { createAction, props } from '@ngrx/store';
import { Section } from './sections.type';

export const addSection = createAction(
  '[Section] Add section',
  props<{ section: Section }>()
);
