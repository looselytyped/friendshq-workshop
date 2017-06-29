import { Injectable } from '@angular/core';
import {
  Http,
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

  constructor(private http: Http) { }

  getFriends(): Observable<Array<Friend>> {
    return this.http.get(`${BASE_URL}/friends`)
      .map(res => res.json());
  }
}
