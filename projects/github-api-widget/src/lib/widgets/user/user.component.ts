import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
// https://medium.com/@alexmaisiura/how-to-create-a-user-search-web-app-for-github-on-angular-6-3f6ed66e5d82
/**
 * Element to show user data with all data
 */
@Component({
  selector: 'github-api-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  /**
   * Take user data to show in template
   */
  @Input()
  user: User;
}
