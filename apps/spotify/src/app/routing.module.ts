import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AuthGuard } from '@cors/core-data';
import { LoginComponent } from './login/login.component';
import { SpotifySearchComponent } from './spotify/spotify-search/spotify-search.component';
import { SpotifyArtistComponent } from './spotify/spotify-artist/spotify-artist.component';
import { SpotifyAlbumComponent } from './spotify/spotify-album/spotify-album.component';

const routes: Route[] = [
  { path: '', redirectTo: '/spotify', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'spotify',
    component: SpotifySearchComponent,
    canActivate: [ AuthGuard ],
    children: [
      { path: 'artist/:id', component: SpotifyArtistComponent },
      { path: 'album/:id', component: SpotifyAlbumComponent }
    ]
  },
  { path: '**', redirectTo: '/spotify', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
