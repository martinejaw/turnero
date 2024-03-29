import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { lastValueFrom, take } from 'rxjs';
import { ApiPaths } from 'src/config/apiPaths';
import { AppState, selectUser } from '../store';
import { login, logout } from '../store/admin/user/user.actions';
import { User } from '../store/admin/user/user.type';
import { getState } from '../store/utils';
import { LoginResponse, SignUpResponse } from './types/LoginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = this.store.pipe(select(selectUser));
  accessToken?: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {}

  async login(email: string, password: string) {
    const resp = await lastValueFrom(
      this.http.post<LoginResponse>(ApiPaths.login, {
        email,
        password,
      })
    );
    this.store.dispatch(login(resp.data));
    this.setAccessToken(resp.accessToken);
    this.router.navigate(['/admin']);
  }

  async signup(email: string, password: string, businessName: string) {
    const resp = await lastValueFrom(
      this.http.post<SignUpResponse>(ApiPaths.signup, {
        email,
        password,
        businessName,
      })
    );
    this.store.dispatch(login(resp.data));
    this.setAccessToken(resp.accessToken);
    this.router.navigate(['/admin']);
  }

  async setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    localStorage.setItem('accessToken', accessToken);
  }

  async clearAccessToken() {
    this.accessToken = undefined;
    localStorage.removeItem('accessToken');
  }

  isAuthenticated() {
    let user;
    user = getState<User>(this.user$);
    return user ? true : false;
  }

  async retrieveState() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) return;
    try {
      const resp = await lastValueFrom(
        this.http.get<SignUpResponse>(ApiPaths.retrieveState, {
          params: { accessToken },
        })
      );
      this.store.dispatch(login(resp.data));
      this.setAccessToken(accessToken);
      this.router.navigate(['/admin']);
    } catch {
      return;
    }
  }

  async logout() {
    this.clearAccessToken();
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
