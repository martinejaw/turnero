import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { lastValueFrom } from 'rxjs';
import { AppState, selectBranches } from 'src/app/core/store';
import { Branch } from 'src/app/core/store/admin/branches/branches.type';
import { Business } from 'src/app/core/store/admin/business/business.type';
import { addSection } from 'src/app/core/store/admin/sections/sections.actions';
import { getState } from 'src/app/core/store/utils';
import { ApiPaths } from 'src/config/apiPaths';
import { SectionResponse } from '../dtoTypes';

@Injectable({
  providedIn: 'root',
})
export class SectionsService {
  branches$ = this.store.pipe(select(selectBranches));

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  async createSection(name: string, description: string, branchId: number) {
    try {
      const resp = await lastValueFrom(
        this.http.post<SectionResponse>(ApiPaths.sections, {
          name: name,
          description: description,
          branchId: branchId,
        })
      );

      this.store.dispatch(addSection({ section: resp }));
    } catch {
      console.log('Explotó');
    }
  }
}
