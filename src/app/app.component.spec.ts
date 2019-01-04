import { GithubApiModule } from 'github-api-widget';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        GithubApiModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'githubApiDemo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('githubApiDemo');
  });

  it('should render titles in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const expectTitles = [ 'With User search', '"mugan86" user widget'];
    const titles = compiled.querySelectorAll('h1');
    let i = 0;
    expectTitles.map(value => {
      expect(titles[i].textContent).toContain(value);
      i++;
    });
  });

  it(`Badge url check is correct`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // Buscar clas
    const element = fixture.debugElement.nativeElement.querySelector('.badge');
    const atribute = element.href;
    expect(atribute).toEqual('https://badge.fury.io/js/github-api-widget');
  });
});
