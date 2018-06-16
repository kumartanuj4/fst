import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { HomeComponent } from './home/home.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowService } from './show.service';
import { YoutubePipe } from './youtube.pipe';
// import { ShowSearchComponent } from './show-search/show-search.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    HomeComponent,
    ShowDetailsComponent,
    SignupComponent,
    LoginComponent,
    YoutubePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule, AppRoutingModule,FormsModule, HttpModule,ReactiveFormsModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
