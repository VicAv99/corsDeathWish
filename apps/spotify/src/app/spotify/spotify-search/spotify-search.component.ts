import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import {
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap
} from 'rxjs/operators';

import { Artist, SpotifyService } from '@cors/core-data';

@Component({
  selector: 'cors-spotify-search',
  templateUrl: './spotify-search.component.html',
  styleUrls: ['./spotify-search.component.scss']
})
export class SpotifySearchComponent implements OnInit {
  searchResults: Artist[];
  searchControl = new FormControl();

  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    this.searchMusic();
  }

  searchMusic() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map(event => event),
        switchMap(qq => this.spotifyService.searchMusic(qq))
      )
      .subscribe(res => (this.searchResults = (<Artist>res).artists.items));
  }

  navigateToArtist(artistId: string) {
    this.router.navigateByUrl(`/spotify/artist/${artistId}`);
  }
}
