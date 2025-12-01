import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsMachineTestComponent } from './reactive-forms-machine-test.component';

describe('ReactiveFormsMachineTestComponent', () => {
  let component: ReactiveFormsMachineTestComponent;
  let fixture: ComponentFixture<ReactiveFormsMachineTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsMachineTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsMachineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
