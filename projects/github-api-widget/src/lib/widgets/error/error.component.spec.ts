import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render titles in a h2 tag', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('h2');
    expect(title.textContent).toContain('Oops!');
  });
  it('should render content in a b tag', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('b');
    expect(title.textContent).toContain('User not found.');
  });
  it('should render content in a p tag', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('p');
    expect(title.textContent).toContain('Please try searching again.');
  });
});
