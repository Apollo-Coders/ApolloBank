import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsDepositComponent } from './modals-deposit.component';

describe('ModalsDepositComponent', () => {
  let component: ModalsDepositComponent;
  let fixture: ComponentFixture<ModalsDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalsDepositComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalsDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
