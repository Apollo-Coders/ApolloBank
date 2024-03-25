import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdSuccessComponent } from './third-success.component';

describe('ThirdSuccessComponent', () => {
  let component: ThirdSuccessComponent;
  let fixture: ComponentFixture<ThirdSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
