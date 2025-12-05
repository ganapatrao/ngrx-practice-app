import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingModule4AuthComponent } from './routing-module4-auth.component';

describe('RoutingModule4AuthComponent', () => {
  let component: RoutingModule4AuthComponent;
  let fixture: ComponentFixture<RoutingModule4AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingModule4AuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingModule4AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
