# Github Api Widget
[![npm version](https://badge.fury.io/js/github-api-widget.svg)](https://badge.fury.io/js/github-api-widget)
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Show github select user principal info layout

## Demo

https://mugan86.github.io/github-api-widget/

## Screenshots

![Select user widget](https://raw.githubusercontent.com/mugan86/github-api-widget/master/screenshots/select-user-widget.png)
![Search User widget](https://raw.githubusercontent.com/mugan86/github-api-widget/master/screenshots/search-user-widget.png)

## Instructions

### Install

```npm install github-api-widget```

### Add css style
In src/styles.css
```@import "./../node_modules/github-api-widget/lib/assets/styles/styles.css";```

### Use in Angular

With default components (use search github user). Add only in desire component.html this tags

```<github-api-search-user></github-api-search-user>```

**If not use search component.**

For example in **app.component.ts** add

#### Properties
```
user: User = null;
error: boolean;
```

#### Inject SearchService
```
constructor(private userSearch: SearchUserService) { }
```

#### Take data from API Github with select user (for example 'mugan86')
```
this.userSearch.takeApiData('mugan86').then(
      data => {
        this.user = data;
      }
);
```
In html template **(app.component.html)** you must add:

### Example:
```<github-api-user *ngIf="user"
    [user]="user"></github-api-user>```
