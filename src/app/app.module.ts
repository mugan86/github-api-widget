import { GithubApiModule } from 'github-api-widget';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
