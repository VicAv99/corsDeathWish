import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { AuthService } from '@cors/core-data';

@Component({
  selector: 'cors-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string;
  @Input() sidenav: MatSidenav;
  @Input() isAuthenticated: boolean;

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
