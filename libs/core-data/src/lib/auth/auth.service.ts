import { Injectable } from '@angular/core';

import * as decode from 'jwt-decode';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export const TOKEN_NAME = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = decode(token);

    if ((<any>decoded).exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds((<any>decoded).exp);
    return date;
  }

  isAuthenticated(token?: string): boolean {
    if (token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  login() {
    return this.http.post(``, {});
  }

  logout() {
    this.setToken('');
    this.router.navigate(['/login']);
  }
}
