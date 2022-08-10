import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Follower} from "../interfaces/Follower";

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getFollowers(username: string): Observable<Array<Follower>> {
    let url = 'https://api.github.com/users/' + username + '/followers';

    return this.httpClient.get(url).pipe(map(result => {
      return <Array<Follower>>result;
    }));
  }
}
