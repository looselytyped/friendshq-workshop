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
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(`${BASE_URL}/friends`);
  }

  saveFriend(friend: Friend): Observable<Friend> {
    return this.http.put<Friend>(`${BASE_URL}/friends/${friend.id}`,
      JSON.stringify(friend),
      { headers: this.headers });
  }
}
