import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
} from "@angular/http";
import {
  Observable,
} from 'rxjs/Observable';
import {
  Friend,
} from "./";
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class FriendsService {
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: Http) { }

  getFriends(): Observable<Array<Friend>> {
    return this.http.get(`${BASE_URL}/friends`)
      .map(res => res.json());
  }

  saveFriend(friend: Friend): Observable<Friend> {
    return this.http.put(`${BASE_URL}/friends/${friend.id}`,
      JSON.stringify(friend),
      { headers: this.headers })
      .map(res => res.json());
  }
}
