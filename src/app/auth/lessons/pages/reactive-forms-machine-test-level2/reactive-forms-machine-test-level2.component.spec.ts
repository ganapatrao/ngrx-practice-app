import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsMachineTestLevel2Component } from './reactive-forms-machine-test-level2.component';

describe('ReactiveFormsMachineTestLevel2Component', () => {
  let component: ReactiveFormsMachineTestLevel2Component;
  let fixture: ComponentFixture<ReactiveFormsMachineTestLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsMachineTestLevel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsMachineTestLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
