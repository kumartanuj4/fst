import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from "../signup/signup.component";
import { ShowsComponent } from '../shows/shows.component';
import { HomeComponent } from '../home/home.component';
import { ShowDetailsComponent } from '../show-details/show-details.component';
// import { ShowSearchComponent } from '../show-search/show-search.component';

// import { ChildComponent } from '../child/child.component';

const routes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'detail/:_id', component: ShowDetailsComponent }
  // { path: 'pipe', component: ShowSearchComponent }
  // { path: 'child', component: ChildComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
