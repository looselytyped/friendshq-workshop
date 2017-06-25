import { Component, OnInit } from '@angular/core';

import {
  Friend,
} from "../../shared";

const FRIENDS: Friend[] = [
  {
    id: 1,
    first_name: 'Michelle',
    last_name: 'Mulroy',
    gender: 'female',
    fav: true,
  },
  {
    id: 2,
    first_name: 'Venkat',
    last_name: 'Subramanian',
    gender: 'male',
    fav: true,
  },
  {
    id: 3,
    first_name: 'Matt',
    last_name: 'Forsythe',
    gender: 'none',
    fav: false,
  },
  {
    id: 4,
    first_name: 'Brian',
    last_name: 'Sletten',
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
  displayBanner: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showBanner(friend: Friend) {
    this.displayBanner = true;
    setTimeout(() => {
      this.displayBanner = false;
    }, 3000);
  }

}
