import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import LoginResponse from './types/LoginResponse';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken?: string;

  constructor(private http: HttpClient) {}

  async login(email: string, password: string) {
    const resp = await lastValueFrom(
      this.http.post<LoginResponse>('http://localhost:3000/auth/login', {
        email,
        password,
      })
    );
    this.setAccessToken(resp.accessToken);
  }

  async setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
    localStorage.setItem('accessToken', accessToken);
  }


}
