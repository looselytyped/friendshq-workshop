import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import {
  Observable,
} from 'rxjs';
import {
  Friend,
} from "./";

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(`${BASE_URL}/friends`);
  }
}
