import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import {
  Observable,
} from 'rxjs/Observable';
import {
  Friend,
} from "./";

const BASE_URL = 'http://localhost:3000';

@Injectable()
export class FriendsService {

  constructor(private http: HttpClient) { }

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(`${BASE_URL}/friends`);
  }
}
