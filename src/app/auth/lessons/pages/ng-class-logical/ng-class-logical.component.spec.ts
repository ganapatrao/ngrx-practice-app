import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassLogicalComponent } from './ng-class-logical.component';

describe('NgClassLogicalComponent', () => {
  let component: NgClassLogicalComponent;
  let fixture: ComponentFixture<NgClassLogicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgClassLogicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassLogicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
