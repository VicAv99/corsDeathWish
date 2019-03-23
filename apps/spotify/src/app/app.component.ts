import { Component } from '@angular/core';

@Component({
  selector: 'cors-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Spotify Example App';
  links = [
    { path: '/login', icon: 'person', title: 'Login' }
  ];
}
