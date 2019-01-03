import { Component, OnInit } from '@angular/core';
import { SearchUserService, User } from 'github-api-widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: User;
  title = 'githubApiDemo';
  constructor(private userSearch: SearchUserService) { }
  ngOnInit(): void {
    this.userSearch.takeApiData('mugan86').then(
      data => {
        this.user = data;
      }
    );
  }
}
