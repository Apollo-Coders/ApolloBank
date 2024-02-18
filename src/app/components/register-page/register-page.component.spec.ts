import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageComponent } from './register-page.component';
import { ActivatedRoute } from '@angular/router';

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
      imports: [RegisterPageComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
