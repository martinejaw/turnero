import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { lastValueFrom, take } from 'rxjs';
import { AppState } from 'src/app/store';
import { addBranch } from 'src/app/store/branches/branches.actions';
import { getState } from 'src/app/store/utils';
import { ApiPaths } from 'src/config/apiPaths';
import { BranchResponse } from '../dtoTypes';

@Injectable({
  providedIn: 'root',
})
export class SucursalService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  async createBranch(address: string) {
    const appState = getState(this.store);
    const resp = await lastValueFrom(
      this.http.post<BranchResponse>(ApiPaths.branches, {
        address: address,
        businessId: appState.businessSlice.business?.id,
      })
    );

    this.store.dispatch(addBranch({ branch: resp }));
  }
}
