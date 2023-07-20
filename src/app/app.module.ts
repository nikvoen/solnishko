import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { GuessPageComponent } from './pages/guess-page/guess-page.component';
import { StarsPageComponent } from './pages/stars-page/stars-page.component';
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { NavigationBarComponent } from './pages/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    MapPageComponent,
    GuessPageComponent,
    StarsPageComponent,
    SchedulePageComponent,
    NavigationBarComponent,
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
