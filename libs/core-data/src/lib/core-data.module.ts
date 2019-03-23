import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { TokenInterceptorService as TokenInterceptor } from './auth/token-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService,
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
