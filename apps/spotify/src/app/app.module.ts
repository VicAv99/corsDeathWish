import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@cors/material';
import { CoreDataModule } from '@cors/core-data';
import { UiToolbarModule } from '@cors/ui-toolbar';
import { UiLoginModule } from '@cors/ui-login';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifySearchComponent } from './spotify/spotify-search/spotify-search.component';
import { SpotifyArtistComponent } from './spotify/spotify-artist/spotify-artist.component';
import { SpotifyAlbumComponent } from './spotify/spotify-album/spotify-album.component';
import { SpotifySearchListComponent } from './spotify/spotify-search/spotify-search-list/spotify-search-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpotifyComponent,
    SpotifySearchComponent,
    SpotifyArtistComponent,
    SpotifyAlbumComponent,
    SpotifySearchListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreDataModule,
    UiToolbarModule,
    UiLoginModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
