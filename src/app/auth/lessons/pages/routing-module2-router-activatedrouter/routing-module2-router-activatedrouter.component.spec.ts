import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingModule2RouterActivatedrouterComponent } from './routing-module2-router-activatedrouter.component';

describe('RoutingModule2RouterActivatedrouterComponent', () => {
  let component: RoutingModule2RouterActivatedrouterComponent;
  let fixture: ComponentFixture<RoutingModule2RouterActivatedrouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingModule2RouterActivatedrouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingModule2RouterActivatedrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
