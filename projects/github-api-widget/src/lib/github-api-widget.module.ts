import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { SearchUserComponent } from './widgets/search-user/search-user.component';
import { UserComponent } from './widgets/user/user.component';
import { ErrorComponent } from './widgets/error/error.component';

const COMPONENTS = [ErrorComponent, UserComponent, SearchUserComponent];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  exports: COMPONENTS
})
export class GithubApiModule { }
