import { createSelector } from '@ngrx/store';
import { selectSections } from '../..';

export const selectSectionsByBranches = (id: number) =>
  createSelector(selectSections, (sections) =>
    sections.filter((section) => section.branchId === id)
  );

export const selectSectionById = (id: number) =>
  createSelector(selectSections, (sections) =>
    sections.find((section) => section.id === id)
  );
