import { Routes } from "@angular/router";

import {
  PeopleComponent,
  PersonFormComponent,
  PersonListComponent,
} from "./people";

import {
  DashboardComponent,
} from "./dashboard";

export const routes: Routes = [
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      {
        path: '',
        component: PersonListComponent,
      },
      {
        path: 'add',
        component: PersonFormComponent,
      }
    ]
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
