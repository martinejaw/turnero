import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../user/user.actions';
import { Section } from './sections.type';

export type SectionsState = { loading: boolean; sections: Section[] };

export const initialState: SectionsState = {
  loading: true,
  sections: [],
};

export const sectionsReducer = createReducer(
  initialState as SectionsState,
  on(login, (_, action) => ({
    loading: false,
    sections: action.sections,
  })),
  on(logout, () => initialState)
);
