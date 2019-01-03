# Github Api Widget

Show github select user principal info layout

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