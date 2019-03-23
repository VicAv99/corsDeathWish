import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { SpotifyService } from './spotify/spotify.service';
import { TokenInterceptorService as TokenInterceptor } from './auth/token-interceptor.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    JwtAuthGuard,
    AuthGuard,
    AuthService,
    SpotifyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreDataModule {}
