import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTransferComponent } from './first-transfer.component';

describe('FirstTransferComponent', () => {
  let component: FirstTransferComponent;
  let fixture: ComponentFixture<FirstTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstTransferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
