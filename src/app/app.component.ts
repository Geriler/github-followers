import { Component } from '@angular/core';
import { Follower } from "./interfaces/Follower";
import { GithubService } from "./services/github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username: string = '';
  currentUsername: string = '';
  followers: Follower[] = [];

  constructor(private githubService: GithubService) {
    this.githubService = githubService;
  }

  getFollowers() {
    this.githubService.getFollowers(this.username).subscribe(result => {
      this.currentUsername = this.username;
      this.followers = result;
    });
  }
}
