import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilingPerformanceComponent } from './profiling-performance.component';

describe('ProfilingPerformanceComponent', () => {
  let component: ProfilingPerformanceComponent;
  let fixture: ComponentFixture<ProfilingPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilingPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilingPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
