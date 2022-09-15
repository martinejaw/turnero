import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { lastValueFrom } from 'rxjs';
import { AppState } from 'src/app/core/store';
import {
  addBranch,
  deleteBranch,
  editBranch,
} from 'src/app/core/store/branches/branches.actions';
import { getState } from 'src/app/core/store/utils';
import { ApiPaths } from 'src/config/apiPaths';
import { BranchResponse } from '../dtoTypes';

@Injectable({
  providedIn: 'root',
})
export class SucursalService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  async createBranch(address: string) {
    try {
      const appState = getState(this.store);
      const resp = await lastValueFrom(
        this.http.post<BranchResponse>(ApiPaths.branches, {
          address: address,
          businessId: appState.businessSlice.business?.id,
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
      const resp = await lastValueFrom(
        this.http.delete<any>(`${ApiPaths.branches}/${id}`)
      );

      this.store.dispatch(deleteBranch({ id }));
    } catch {
      console.log('Explotó');
    }
  }
}
