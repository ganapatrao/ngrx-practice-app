import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapBrushupComponent } from './bootstrap-brushup.component';

describe('BootstrapBrushupComponent', () => {
  let component: BootstrapBrushupComponent;
  let fixture: ComponentFixture<BootstrapBrushupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapBrushupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapBrushupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
