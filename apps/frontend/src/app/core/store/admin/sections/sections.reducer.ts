import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../user/user.actions';
import { addSection, deleteSection, editSection } from './sections.actions';
import { Section } from './sections.type';

export type SectionsState = Section[];

export const initialState: SectionsState = [];

export const sectionsReducer = createReducer(
  initialState as SectionsState,
  on(login, (_, action) => action.sections),
  on(logout, () => initialState),
  on(addSection, (state, action) => [...state, action.section]),
  on(editSection, (state, action) => {
    let sectionsState = state.map((section) => {
      if (section.id === action.section.id) {
        return {
          ...section,
          name: action.section.name,
          description: action.section.description,
        };
      }

      return section;
    });

    return sectionsState;
  }),
  on(deleteSection, (state, action) => {
    let sectionsState = state.filter((section) => section.id !== action.id);
    return sectionsState;
  })
);
