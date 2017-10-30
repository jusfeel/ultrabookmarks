import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainNavbarComponent } from './home-main-navbar.component';

describe('HomeMainNavbarComponent', () => {
  let component: HomeMainNavbarComponent;
  let fixture: ComponentFixture<HomeMainNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMainNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMainNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
