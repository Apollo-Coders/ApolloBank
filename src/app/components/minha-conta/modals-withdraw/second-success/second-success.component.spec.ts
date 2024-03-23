import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSuccessComponent } from './second-success.component';

describe('SecondSuccessComponent', () => {
  let component: SecondSuccessComponent;
  let fixture: ComponentFixture<SecondSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
