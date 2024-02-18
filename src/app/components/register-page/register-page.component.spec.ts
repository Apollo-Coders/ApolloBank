import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageComponent } from './register-page.component';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { By } from '@angular/platform-browser';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;
  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: () => '/login',
      },
    },

  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPageComponent, NavbarComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    component.navbarButton = 'Test Button';
    component.route = '/test-route';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch to subsequent form', () => {
    component.switchToSubsequentForm();
    expect(component.currentForm).toBe('subsequent');
  });
  it('should switch to succes form', () => {
    component.switchToSuccess();
    expect(component.currentForm).toBe('success');
  });
  it('should switch to register form', () => {
    component.switchToFirst();
    expect(component.currentForm).toBe('register');
  });

  it('should switch back to the register form', () => {
    component.switchToSubsequentForm(); 
    component.switchToFirst(); 
    expect(component.currentForm).toBe('register');
  });


  it('should pass navbarButton and route to app-navbar', () => {
    const navbarComponent: NavbarComponent = fixture.debugElement.query(By.directive(NavbarComponent)).componentInstance;
    expect(navbarComponent.navbarButton).toEqual('Test Button');
    expect(navbarComponent.navButtonRoute).toEqual('/test-route');
  });

  it('should start with the register form', () => {
    expect(component.currentForm).toBe('register');
  });
  

});
