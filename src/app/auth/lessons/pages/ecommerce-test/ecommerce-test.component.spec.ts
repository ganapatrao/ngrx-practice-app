import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceTestComponent } from './ecommerce-test.component';

describe('EcommerceTestComponent', () => {
  let component: EcommerceTestComponent;
  let fixture: ComponentFixture<EcommerceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
