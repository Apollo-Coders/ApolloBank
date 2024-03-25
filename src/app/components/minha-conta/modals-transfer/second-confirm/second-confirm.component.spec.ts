import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondConfirmComponent } from './second-confirm.component';

describe('SecondConfirmComponent', () => {
  let component: SecondConfirmComponent;
  let fixture: ComponentFixture<SecondConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
