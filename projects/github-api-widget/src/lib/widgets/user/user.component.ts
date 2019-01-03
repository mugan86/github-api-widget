import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user.interface';
// https://medium.com/@alexmaisiura/how-to-create-a-user-search-web-app-for-github-on-angular-6-3f6ed66e5d82
@Component({
  selector: 'github-api-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  @Input()
  user: User;
}
