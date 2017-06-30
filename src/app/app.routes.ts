import { Routes } from "@angular/router";

import {
  PeopleComponent,
} from "./people";

export const routes: Routes = [
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: '**',
    redirectTo: 'people',
    pathMatch: 'full'
  },
];
