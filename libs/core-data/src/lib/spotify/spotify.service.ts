import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

export const LOGIN_URL = 'https://accounts.spotify.com/api/token';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}
}
