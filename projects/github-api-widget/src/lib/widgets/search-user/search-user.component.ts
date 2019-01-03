import { SearchUserService } from './../../services/search-user.service';
import { User } from '../../interfaces/user.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'github-api-search-user',
  templateUrl: './search-user.component.html'
})
export class SearchUserComponent {
  error = false;
  user: User = null;
  search: string;

  constructor(private userSearch: SearchUserService) { }

  searchUser(key: any) {
    console.log(key.keyCode);
    const user = this.search;
    console.log(user);
    if (key.keyCode === 13) {
      if (user === '' || user === undefined) {
        this.user = null;
        this.error = true;
      } else {
        this.userSearch.takeApiData(user).then(
          data => {
            this.user = data;
            this.error = false;
          }
        );
      }
    }
  }

}
