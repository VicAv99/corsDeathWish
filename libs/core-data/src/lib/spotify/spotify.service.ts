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

  spotifyLogin() {
    const formData = new FormData();
    formData.append('grant_type', 'client_credentials');

    const headers = new HttpHeaders();
    headers.append(
      'Authorization',
      'Basic YzdjZjgxNDdlZWYxNDlmZDgyNjQ4NWMwZWM5ODQyNTE6ZmZhYWYzOTUyNDNjNDA5ODg0MWNhZDE1ZjBmNzIwNjg='
    );

    this.authService.login(LOGIN_URL, formData, headers);
  }
}
