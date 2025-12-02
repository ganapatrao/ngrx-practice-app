import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsMachineTestLevel3Component } from './reactive-forms-machine-test-level3.component';

describe('ReactiveFormsMachineTestLevel3Component', () => {
  let component: ReactiveFormsMachineTestLevel3Component;
  let fixture: ComponentFixture<ReactiveFormsMachineTestLevel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsMachineTestLevel3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsMachineTestLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
