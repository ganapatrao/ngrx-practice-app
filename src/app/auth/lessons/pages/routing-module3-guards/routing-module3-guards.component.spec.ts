import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingModule3GuardsComponent } from './routing-module3-guards.component';

describe('RoutingModule3GuardsComponent', () => {
  let component: RoutingModule3GuardsComponent;
  let fixture: ComponentFixture<RoutingModule3GuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingModule3GuardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingModule3GuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
