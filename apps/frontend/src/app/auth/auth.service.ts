import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { lastValueFrom, take } from 'rxjs';
import { AppState } from '../store';
import { login } from '../store/user/user.actions';
import { LoginResponse, SignUpResponse } from './types/LoginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSlice$ = this.store.select('userSlice');
  accessToken?: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>
  ) {}

  async login(email: string, password: string) {
    const resp = await lastValueFrom(
      this.http.post<LoginResponse>('http://localhost:3000/auth/login', {
        email,
        password,
      })
    );
    this.store.dispatch(login({ user: resp.user, business: resp.business }));
    this.setAccessToken(resp.accessToken);
    this.router.navigate(['/admin']);
  }

  async signup(email: string, password: string, businessName: string) {
    const resp = await lastValueFrom(
      this.http.post<SignUpResponse>('http://localhost:3000/auth/signup', {
        email,
        password,
        businessName,
      })
    );
    this.store.dispatch(login({ user: resp.user, business: resp.business }));
    this.setAccessToken(resp.accessToken);
    this.router.navigate(['/admin']);
  }

  async setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    localStorage.setItem('accessToken', accessToken);
  }

  isAuthenticated() {
    let user;
    this.userSlice$
      .pipe(take(1))
      .subscribe((userState) => (user = userState.user));
    return user ? true : false;
  }
}
