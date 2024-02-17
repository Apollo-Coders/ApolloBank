import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarContaComponent } from './navbar-conta.component';

describe('NavbarContaComponent', () => {
  let component: NavbarContaComponent;
  let fixture: ComponentFixture<NavbarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
