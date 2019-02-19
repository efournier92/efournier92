import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteButtonsComponent } from './route-buttons.component';

describe('RouteButtonsComponent', () => {
  let component: RouteButtonsComponent;
  let fixture: ComponentFixture<RouteButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
