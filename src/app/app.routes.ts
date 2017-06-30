import { Routes } from "@angular/router";

import {
  PeopleComponent,
} from "./people";

import {
  DashboardComponent,
} from "./dashboard";

export const routes: Routes = [
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
];
