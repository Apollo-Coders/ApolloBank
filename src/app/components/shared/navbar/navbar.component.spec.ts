import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageComponent } from '../../home-page/home-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import e from 'express';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let location: Location;
  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: () => '/home',

      },
    },

  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterTestingModule.withRoutes([
        { path: 'home', component: HomePageComponent }])],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    component.navbarButton = 'Test Button';
    component.navButtonRoute = '/test-route';

    fixture.detectChanges();
  });

 
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct routerLink to home', () => {
    const homeLinkDe = fixture.debugElement.query(By.css('a[routerLink="/home"]'));
    expect(homeLinkDe).not.toBeNull();

  });



  it('should have a link', () => {
    const link = fixture.nativeElement.querySelector('a');
    expect(link).toBeTruthy();
  });

  it('should display the logo', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('img.logo').src).toContain('logo.svg');
  });

  it('should have a h1', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1).toBeTruthy();
    expect(h1.textContent).toContain('Apollo Bank');
  });

  it('should have a ul', () => {
    const ul = fixture.nativeElement.querySelector('ul');
    expect(ul).toBeTruthy();
  });

  it('should have a li', () => {
    const li = fixture.nativeElement.querySelector('li');
    expect(li).toBeTruthy();
  });

  it('should have a a', () => {
    const a = fixture.nativeElement.querySelector('a');
    expect(a).toBeTruthy();
  });

  it('should have a span', () => {
    const span = fixture.nativeElement.querySelector('span');
    expect(span).toBeTruthy();
  });

  it('should have a div', () => {
    const div = fixture.nativeElement.querySelector('div');
    expect(div).toBeTruthy();
  });

  it('should have a nav', () => {
    const nav = fixture.nativeElement.querySelector('nav');
    expect(nav).toBeTruthy();
  });

  it('should toggle menu visibility when hamburger is clicked', () => {
    const hamburgerMenu = fixture.debugElement.query(By.css('#menu-hamburguer')).nativeElement;
    expect(component.isCollapsed).toBeTrue();

    hamburgerMenu.click();
    fixture.detectChanges();

    expect(component.isCollapsed).toBeTrue();

    const menuElement = fixture.debugElement.query(By.css('ul'));
    expect(menuElement).toBeTruthy();
  });

  const navbarButton = 'Test Button';

  it('should display the correct text for each navigation link', () => {
    const navLinks = fixture.debugElement.queryAll(By.css('nav ul li a'));
    expect(navLinks.length).toBe(3); 
    expect(navLinks[0].nativeElement.textContent).toContain('Início');
    expect(navLinks[1].nativeElement.textContent).toContain(navbarButton); 
    expect(navLinks[2].nativeElement.textContent).toContain('Ajuda');
  });
  it('navigates to /home when the logo is clicked', () => {
    const logoLink = fixture.debugElement.nativeElement.querySelector('a[routerLink="/home"]');
    logoLink.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  });
 

});

