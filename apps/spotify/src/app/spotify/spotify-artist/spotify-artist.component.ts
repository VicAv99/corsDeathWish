import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService, Artist, Album } from '@cors/core-data';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cors-spotify-artist',
  templateUrl: './spotify-artist.component.html',
  styleUrls: ['./spotify-artist.component.scss']
})
export class SpotifyArtistComponent implements OnInit {
  artist: Artist;
  albums: Album[];

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    // Grab id from params
    this.route.params.pipe(
        map(params => params['id'])
      ).subscribe(id => {
        // Get artist details
        this.spotifyService.getArtist(id)
          .subscribe((artist: Artist) => {
            this.artist = artist;
          });
        // Get album details
        this.spotifyService.getAlbums(id)
          .subscribe((albums: { items: Album[] }) => {
            this.albums = albums.items;
      });
    });
  }

  displayImage(image: any) {
    return image.url;
  }

  hasMultipleImages(imageLength: number) {
    return imageLength > 0;
  }
}
