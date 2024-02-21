import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { By } from '@angular/platform-browser';
import { RegisterFormComponent } from '../shared/register-form/register-form.component';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: () => '/login',
      },
    },

  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent, RouterTestingModule]
    })

      .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have the 'login' route`, () => {
    expect(component.route).toEqual('/login');
  });
  it(`should have the 'login' button`, () => {
    expect(component.navbarButton).toEqual('Acesse sua conta');
  });
  it('should have the navbar', () => {
    const navbar = fixture.debugElement.query(By.directive(NavbarComponent));
    expect(navbar).toBeTruthy();
  });
  it('should have an image', () => {
    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeTruthy();
  });
  it('should have a button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
  });
  it('should have an h3', () => {
    const h3 = fixture.debugElement.query(By.css('h3'));
    expect(h3).toBeTruthy();
    
  });
});
