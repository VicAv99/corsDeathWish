import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

export const TOKEN_NAME = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.setToken(this.getToken());
  }

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_NAME, token);
    this.isAuthenticated$.next(token !== '');
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = decode(token);

    if ((<any>decoded).exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds((<any>decoded).exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  login(url: string, data?: any, headers?: HttpHeaders, params?: HttpParams) {
    return this.http.post(url, data, { headers, params });
  }

  logout() {
    this.setToken('');
    this.router.navigate(['/login']);
  }
}
