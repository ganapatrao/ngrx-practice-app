import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRevisionModule1Component } from './angular-revision-module1.component';

describe('AngularRevisionModule1Component', () => {
  let component: AngularRevisionModule1Component;
  let fixture: ComponentFixture<AngularRevisionModule1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularRevisionModule1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularRevisionModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
