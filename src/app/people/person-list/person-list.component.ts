import { Component, OnInit } from '@angular/core';

import {
  Friend,
  FriendsService,
} from "../../shared";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  friends: Friend[] = [];
  displayBanner: boolean = false;

  constructor(private friendsService: FriendsService) { }

  ngOnInit() {
    this.friendsService.getFriends()
      .subscribe(friends => this.friends = friends);
  }

  showBanner(friend: Friend) {
    this.displayBanner = true;
    setTimeout(() => {
      this.displayBanner = false;
    }, 3000);
  }

}
