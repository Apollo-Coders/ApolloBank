import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDepositComponent } from './first-deposit.component';

describe('FirstDepositComponent', () => {
  let component: FirstDepositComponent;
  let fixture: ComponentFixture<FirstDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstDepositComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
