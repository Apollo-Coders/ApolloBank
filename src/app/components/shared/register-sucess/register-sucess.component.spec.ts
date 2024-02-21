import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSucessComponent } from './register-sucess.component';
import { ActivatedRoute } from '@angular/router';

describe('RegisterSucessComponent', () => {
  let component: RegisterSucessComponent;
  let fixture: ComponentFixture<RegisterSucessComponent>;

  const activatedRouteStub = {
    snapshot: {
      paramMap: {
        get: () => '/login',
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSucessComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]

    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have the 'login' title`, () => {
    expect(component.title).toEqual('Cadastro criado!');
  });
  it(`should have the 'button' text`, () => {
    expect(component.buttonText).toEqual('Acesse sua conta');
  });
  it(`should have the 'login' paragraph`, () => {
    expect(component.paragraph).toEqual('Faça login na sua conta e desfrute de todos os benefícios e liberdade que o banco Apollo pode te fornecer!');
  });
});
