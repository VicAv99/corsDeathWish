import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '@cors/core-data';

@Component({
  selector: 'cors-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (this.route.snapshot.fragment) {
      this.handleToken();
    }
  }

  login(user: { username: string, password: any}) {
    const redirect = window.location.href;
    const clientId = 'ab5f22e78a5d4e16a7834b48e6ed0bc7';

    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirect}`;
  }

  private handleToken() {
    const accessToken = this.route.snapshot.fragment
      .split('access_token=')[1]
      .split('&token')[0];

    this.authService.setToken(accessToken);
    this.router.navigate(['/'], { queryParams: {} });
  }

}
