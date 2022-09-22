import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { lastValueFrom } from 'rxjs';
import { AppState, selectBusiness } from 'src/app/core/store';
import {
  addBranch,
  deleteBranch,
  editBranch,
} from 'src/app/core/store/admin/branches/branches.actions';
import { Business } from 'src/app/core/store/admin/business/business.type';

import { getState } from 'src/app/core/store/utils';
import { ApiPaths } from 'src/config/apiPaths';
import { BranchResponse } from '../dtoTypes';

@Injectable({
  providedIn: 'root',
})
export class SucursalService {
  business$ = this.store.pipe(select(selectBusiness));

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  async createBranch(address: string) {
    try {
      const lastBusiness = getState<Business>(this.business$);
      const resp = await lastValueFrom(
        this.http.post<BranchResponse>(ApiPaths.branches, {
          address: address,
          businessId: lastBusiness?.id,
        })
      );

      this.store.dispatch(addBranch({ branch: resp }));
    } catch {
      console.log('Explotó');
    }
  }

  async editBranch(id: number, address: string) {
    try {
      const resp = await lastValueFrom(
        this.http.put<BranchResponse>(ApiPaths.branches, {
          id,
          address,
        })
      );

      this.store.dispatch(editBranch({ branch: resp }));
    } catch {
      console.log('Explotó');
    }
  }

  async deleteBranch(id: number) {
    try {
      await lastValueFrom(this.http.delete<any>(`${ApiPaths.branches}/${id}`));

      this.store.dispatch(deleteBranch({ id }));
    } catch {
      console.log('Explotó');
    }
  }
}
