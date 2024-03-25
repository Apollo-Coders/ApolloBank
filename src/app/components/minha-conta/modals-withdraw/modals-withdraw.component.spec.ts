import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsWithdrawComponent } from './modals-withdraw.component';

describe('ModalsWithdrawComponent', () => {
  let component: ModalsWithdrawComponent;
  let fixture: ComponentFixture<ModalsWithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalsWithdrawComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalsWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
