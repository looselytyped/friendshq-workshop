import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {
  PeopleComponent,
  PersonListComponent,
  ShowPersonComponent,
} from './people';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
