import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmSchedulingComponent } from './confirm-scheduling.component';

describe('ConfirmSchedulingComponent', () => {
  let component: ConfirmSchedulingComponent;
  let fixture: ComponentFixture<ConfirmSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmSchedulingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
