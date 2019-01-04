# Github Api Widget
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c7869476eb8b4c67bbda76b227c5d3cb)](https://app.codacy.com/app/mugan86/github-api-widget?utm_source=github.com&utm_medium=referral&utm_content=mugan86/github-api-widget&utm_campaign=Badge_Grade_Dashboard)
[![npm version](https://badge.fury.io/js/github-api-widget.svg)](https://badge.fury.io/js/github-api-widget)
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Demo

[https://mugan86.github.io/github-api-widget/](https://mugan86.github.io/github-api-widget/)


## Screenshots

![Select user widget](https://raw.githubusercontent.com/mugan86/github-api-widget/master/screenshots/select-user-widget.png)
![Search User widget](https://raw.githubusercontent.com/mugan86/github-api-widget/master/screenshots/search-user-widget.png)

## Instructions

### Install

```npm install github-api-widget```

### Add css style
In src/styles.css
```css
@import "./../node_modules/github-api-widget/lib/assets/styles/styles.css";
```

### Use in Angular

With default components (use search github user). Add only in desire component.html this tags

```html
<github-api-search-user></github-api-search-user>
```

#### If not use search component

For example in **app.component.ts** add

#### Properties
```typescript
user: User = null;
error: boolean;
```

#### Inject SearchService

```typescript
constructor(private userSearch: SearchUserService) { } 
```

#### Take data from API Github with select user (for example 'mugan86')
```typescript
this.userSearch.takeApiData('mugan86').then(
      data => {
        this.user = data;
      }
);
```
In html template **(app.component.html)** you must add:

#### Example
```html
<github-api-user *ngIf="user" [user]="user"></github-api-user>
```

#### Change principal widget background image

Add in style.css this rule:

```css
.user-card .header {
    background-image: url('<image-url>');
}
```