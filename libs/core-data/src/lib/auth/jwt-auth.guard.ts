import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthGuard implements CanActivate {
  constructor (
    public router: Router,
    private authService: AuthService
  ) { }

  canActivate(): boolean {
    if (!this.authService.isTokenExpired()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
