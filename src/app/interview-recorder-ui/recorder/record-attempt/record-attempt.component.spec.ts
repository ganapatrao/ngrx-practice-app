import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordAttemptComponent } from './record-attempt.component';

describe('RecordAttemptComponent', () => {
  let component: RecordAttemptComponent;
  let fixture: ComponentFixture<RecordAttemptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordAttemptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
