import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingModule1Component } from './routing-module1.component';

describe('RoutingModule1Component', () => {
  let component: RoutingModule1Component;
  let fixture: ComponentFixture<RoutingModule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingModule1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
