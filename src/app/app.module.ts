import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  PeopleComponent,
  PersonListComponent,
} from './people';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
