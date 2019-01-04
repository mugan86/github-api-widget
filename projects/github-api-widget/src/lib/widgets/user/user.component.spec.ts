import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

const mockResult = {
  'login': 'mugan86',
  'id': 5081970,
  'node_id': 'MDQ6VXNlcjUwODE5NzA=',
  'avatar_url': 'https://avatars0.githubusercontent.com/u/5081970?v=4',
  'gravatar_id': '',
  'url': 'https://api.github.com/users/mugan86',
  'html_url': 'https://github.com/mugan86',
  'followers_url': 'https://api.github.com/users/mugan86/followers',
  'following_url': 'https://api.github.com/users/mugan86/following{/other_user}',
  'gists_url': 'https://api.github.com/users/mugan86/gists{/gist_id}',
  'starred_url': 'https://api.github.com/users/mugan86/starred{/owner}{/repo}',
  'subscriptions_url': 'https://api.github.com/users/mugan86/subscriptions',
  'organizations_url': 'https://api.github.com/users/mugan86/orgs',
  'repos_url': 'https://api.github.com/users/mugan86/repos',
  'events_url': 'https://api.github.com/users/mugan86/events{/privacy}',
  'received_events_url': 'https://api.github.com/users/mugan86/received_events',
  'type': 'User',
  'site_admin': false,
  'name': 'Anartz Mugika Ledo',
  'company': '@servirace @CrazyWords ',
  'blog': 'https://twitter.com/mugan86',
  'location': 'Soraluze (Basque Country) (EU)',
  'email': null,
  'hireable': true,
  // tslint:disable-next-line:max-line-length
  'bio': 'Android Native Developer / Applications hybrid with Ionic (1-3) and Web Developer in Angular 2-7 .\r\nFounder @servirace. Learning Kotlin Android intenselly.',
  'public_repos': 98,
  'public_gists': 2,
  'followers': 12,
  'following': 31,
  'created_at': new Date('2013-07-24T14:28:55Z'),
  'updated_at': new Date('2019-01-03T16:20:30Z')

};
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = mockResult;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render titles in a h1 tag', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('h1');
    // console.log(title);
    expect(title.textContent).toContain(component.user.name);
  });

  // de = fixture.debugElement.query(By.css('.welcome'));
  it('should render status urls', () => {
    fixture.detectChanges();
    const statusLinks = fixture.debugElement.nativeElement.querySelectorAll('a');
    const loginUser = component.user.login;
    const expectUrls = [ `https://github.com/${ loginUser }`,
                           `https://github.com/${ loginUser }?tab=repositories`,
                           `https://gist.github.com/${ loginUser }`,
                           `https://github.com/${ loginUser }/followers`,
                           `https://github.com/${ loginUser }`
                          ];
    for (let i = 0; i < statusLinks.length; i++) {
      const url = statusLinks[i].href;
      expect(url).toBe(expectUrls[i]);
    }
  });

  it('should render to check avatar URL is correct', () => {
    fixture.detectChanges();
    const statusLinks = fixture.debugElement.nativeElement.querySelectorAll('a');
    expect(statusLinks[0].querySelector('img').src).toContain(component.user.avatar_url);
  });
});
