import { SearchUserService } from './../../services/search-user.service';
import { User } from '../../interfaces/user.interface';
import { Component } from '@angular/core';

/**
 * Component that contain in template github-api-user-component and error component
 * with search input html element
 */
@Component({
  selector: 'github-api-search-user',
  templateUrl: './search-user.component.html'
})
export class SearchUserComponent {
  /**
   * @ignore
   */
  error = false;
  /**
   * @ignore
   */
  user: User = null;
  /**
   * @ignore
   */
  search: string;

  /**
   * Constructor to inject user search service
   * @param userSearch Inject User search service
   */
  constructor(private userSearch: SearchUserService) { }

  /**
   * Function to find input user text in Github API
   * @param key Select key. Only make request when key event is INTRO
   */
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
