import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  Friend,
} from "../../shared";

@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.css']
})
export class ShowPersonComponent implements OnInit {
  @Input() friend: Friend;
  @Output() notifyParent: EventEmitter<Friend> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.friend.fav = !this.friend.fav;
    this.notifyParent.emit(this.friend);
  }
}
