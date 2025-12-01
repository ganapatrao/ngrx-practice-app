import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormFamilyComponent } from './reactive-form-family.component';

describe('ReactiveFormFamilyComponent', () => {
  let component: ReactiveFormFamilyComponent;
  let fixture: ComponentFixture<ReactiveFormFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormFamilyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
