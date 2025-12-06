import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewRecorderPageComponent } from './interview-recorder-page.component';

describe('InterviewRecorderPageComponent', () => {
  let component: InterviewRecorderPageComponent;
  let fixture: ComponentFixture<InterviewRecorderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewRecorderPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewRecorderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
