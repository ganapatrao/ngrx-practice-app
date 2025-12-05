import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingModule5SSRComponent } from './routing-module5-ssr.component';

describe('RoutingModule5SSRComponent', () => {
  let component: RoutingModule5SSRComponent;
  let fixture: ComponentFixture<RoutingModule5SSRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingModule5SSRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingModule5SSRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
