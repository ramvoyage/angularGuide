import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteModuleComponent } from './route-module.component';

describe('RouteModuleComponent', () => {
  let component: RouteModuleComponent;
  let fixture: ComponentFixture<RouteModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
