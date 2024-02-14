import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsequentRegistrationPageComponent } from './subsequent-registration-page.component';

describe('SubsequentRegistrationPageComponent', () => {
  let component: SubsequentRegistrationPageComponent;
  let fixture: ComponentFixture<SubsequentRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsequentRegistrationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubsequentRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
