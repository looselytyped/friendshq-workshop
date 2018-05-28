import { Component, OnInit } from '@angular/core';

import {
  Friend,
} from "../../shared";

const FRIENDS: Friend[] = [
  {
    id: 1,
    firstName: 'Michelle',
    lastName: 'Mulroy',
    gender: 'female',
    fav: true,
  },
  {
    id: 2,
    firstName: 'Venkat',
    lastName: 'Subramanian',
    gender: 'male',
    fav: true,
  },
  {
    id: 3,
    firstName: 'Matt',
    lastName: 'Forsythe',
    gender: 'none',
    fav: false,
  },
  {
    id: 4,
    firstName: 'Brian',
    lastName: 'Sletten',
    gender: 'male',
    fav: false,
  },
];

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  friends: Friend[] = FRIENDS;

  constructor() { }

  ngOnInit() {
  }

}
