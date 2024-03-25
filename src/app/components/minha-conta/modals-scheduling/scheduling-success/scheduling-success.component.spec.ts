import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingSuccessComponent } from './scheduling-success.component';

describe('SchedulingSuccessComponent', () => {
  let component: SchedulingSuccessComponent;
  let fixture: ComponentFixture<SchedulingSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedulingSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchedulingSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
