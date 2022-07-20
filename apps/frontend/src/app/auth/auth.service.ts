import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { lastValueFrom } from 'rxjs';
import { login } from '../store/user/user.actions';
import { UserState } from '../store/user/user.reducer';
import LoginResponse from './types/LoginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken?: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<{ user: UserState }>
  ) {}

  async login(email: string, password: string) {
    const resp = await lastValueFrom(
      this.http.post<LoginResponse>('http://localhost:3000/auth/login', {
        email,
        password,
      })
    );
    this.store.dispatch(login({ user: resp.user }));
    this.setAccessToken(resp.accessToken);
    this.router.navigate(['/']);
  }

  async setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    localStorage.setItem('accessToken', accessToken);
  }
}
