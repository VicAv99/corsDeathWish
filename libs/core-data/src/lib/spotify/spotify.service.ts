import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

export const BASE_URL = 'https://api.spotify.com/v1';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  searchMusic(str: string, type = 'artist') {
    const params = new HttpParams()
    .append('q', str)
    .append('type', type)
    .append('limit', '20');

    return this.http.get(`${this.getUrlForQuery('search')}`, { params });
  }

  getArtist(id: string) {
    return this.http.get(`${this.getUrlForQuery('artists')}/${id}`);
  }

  getAlbums(id: string) {
    return this.http.get(`${this.getUrlForQuery('artists')}/${id}/albums`);
  }

  getAlbum(id: string) {
    return this.http.get(`${this.getUrlForQuery('albums')}/${id}`);
  }

  private getUrlForQuery(endpoint: string) {
    return `${BASE_URL}/${endpoint}`;
  }
}
