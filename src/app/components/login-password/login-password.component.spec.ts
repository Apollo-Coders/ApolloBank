import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPasswordComponent } from './login-password.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginPasswordComponent', () => {
  let component: LoginPasswordComponent;
  let fixture: ComponentFixture<LoginPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPasswordComponent, RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
