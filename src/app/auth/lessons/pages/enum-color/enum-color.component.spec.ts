import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumColorComponent } from './enum-color.component';

describe('EnumColorComponent', () => {
  let component: EnumColorComponent;
  let fixture: ComponentFixture<EnumColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnumColorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnumColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
