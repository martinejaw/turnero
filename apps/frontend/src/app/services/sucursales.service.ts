import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { lastValueFrom, take } from 'rxjs';
import { AppState } from '../store';
import { login, logout } from '../store/user/user.actions';

@Injectable({
  providedIn: 'root',
})
export class SucursalService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {}

  async createBranch() {
    const resp = await lastValueFrom(
      this.http.post<any>('http://localhost:3000/branches', {
        address: 'Calle siempre viva',
        businessId: 1,
      })
    );

    console.log('Respuesta del post:', resp);
  }
}
