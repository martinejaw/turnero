import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  async login(email: string, password: string) {
    return lastValueFrom(
      this.http.post<any>('http://localhost:3000/auth/login', {
        email,
        password,
      })
    );
  }
}
