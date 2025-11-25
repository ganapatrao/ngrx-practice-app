import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumColorChildComponent } from './enum-color-child.component';

describe('EnumColorChildComponent', () => {
  let component: EnumColorChildComponent;
  let fixture: ComponentFixture<EnumColorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnumColorChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnumColorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
