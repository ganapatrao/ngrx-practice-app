import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianBasicComponent } from './accordian-basic.component';

describe('AccordianBasicComponent', () => {
  let component: AccordianBasicComponent;
  let fixture: ComponentFixture<AccordianBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordianBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordianBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
