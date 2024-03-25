import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDepositComponent } from './success-deposit.component';

describe('SuccessDepositComponent', () => {
  let component: SuccessDepositComponent;
  let fixture: ComponentFixture<SuccessDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessDepositComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
