import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../user/user.actions';
import { addSection } from './sections.actions';
import { Section } from './sections.type';

export type SectionsState = Section[];

export const initialState: SectionsState = [];

export const sectionsReducer = createReducer(
  initialState as SectionsState,
  on(login, (_, action) => action.sections),
  on(logout, () => initialState),
  on(addSection, (state, action) => [...state, action.section])
);
