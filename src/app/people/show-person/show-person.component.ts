import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  Friend,
  FriendsService,
} from "../../shared";

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.css']
})
export class ShowPersonComponent implements OnInit {
  @Input() friend: Friend;
  @Output() notifyParent: EventEmitter<Friend> = new EventEmitter();

  constructor(private friendService: FriendsService) { }

  ngOnInit() {
  }

  like() {
    this.friend.fav = !this.friend.fav;
    this.friendService.saveFriend(this.friend)
      .subscribe(friend => {
        this.notifyParent.emit(friend);
      });
  }
}
