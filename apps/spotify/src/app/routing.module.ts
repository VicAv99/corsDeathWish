import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AuthGuard } from '@cors/core-data';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
  { path: 'login', component: LoginComponent },
  {
    path: 'spotify', canActivate: [AuthGuard], children: [

    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
