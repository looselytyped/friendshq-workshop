import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import {
  PeopleComponent,
  PersonListComponent,
  ShowPersonComponent,
  PersonFormComponent,
} from './people';

import {
  FriendsService,
  EnumToArrayPipe,
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
    PersonFormComponent,
    EnumToArrayPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [
    FriendsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
