import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { GuessPageComponent } from './pages/guess-page/guess-page.component';
import { StarsPageComponent } from './pages/stars-page/stars-page.component';
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProfilePageComponent,
    MapPageComponent,
    GuessPageComponent,
    StarsPageComponent,
    SchedulePageComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterModule.forRoot([
      { path: '', component: SchedulePageComponent},
      { path: 'map', component: MapPageComponent},
      { path: 'guess', component: GuessPageComponent},
      { path: 'star', component: StarsPageComponent},
      { path: 'profile', component: ProfilePageComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
