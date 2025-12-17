import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewInitUsecasesComponent } from './after-view-init-usecases.component';

describe('AfterViewInitUsecasesComponent', () => {
  let component: AfterViewInitUsecasesComponent;
  let fixture: ComponentFixture<AfterViewInitUsecasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterViewInitUsecasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterViewInitUsecasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
