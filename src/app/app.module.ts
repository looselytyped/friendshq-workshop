import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {
  PeopleComponent,
  PersonListComponent,
  ShowPersonComponent,
  FullNamePipe,
} from './people';

import {
  FriendsService,
} from "./shared";

import {
  routes,
} from "./app.routes";
import {
  DashboardComponent,
} from './dashboard';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonListComponent,
    ShowPersonComponent,
    DashboardComponent,
    FullNamePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    FriendsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
