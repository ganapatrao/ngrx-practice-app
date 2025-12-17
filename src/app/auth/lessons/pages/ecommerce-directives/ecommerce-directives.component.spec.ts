import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceDirectivesComponent } from './ecommerce-directives.component';

describe('EcommerceDirectivesComponent', () => {
  let component: EcommerceDirectivesComponent;
  let fixture: ComponentFixture<EcommerceDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
