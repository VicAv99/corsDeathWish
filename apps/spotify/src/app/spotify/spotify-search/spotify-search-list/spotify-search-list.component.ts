import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Artist } from '@cors/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'cors-spotify-search-list',
  templateUrl: './spotify-search-list.component.html',
  styleUrls: ['./spotify-search-list.component.scss']
})
export class SpotifySearchListComponent {
  @Input() artists: Artist[];
  @Output() navigated = new EventEmitter();

  constructor(private router: Router) { }

  fallbackImage(image: string) {
    return image ? image : '../../assets/spotify.svg';
  }

  navigateToArtist(artistId: string) {
    this.navigated.emit(artistId);
  }
}
