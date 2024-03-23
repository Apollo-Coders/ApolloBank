import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWithdrawComponent } from './first-withdraw.component';

describe('FirstWithdrawComponent', () => {
  let component: FirstWithdrawComponent;
  let fixture: ComponentFixture<FirstWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstWithdrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
