import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../../../services/form.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Subscription } from 'rxjs';
import { AuthenticationServiceService } from '../../../services/authentication-service.service';
import { Login } from '../../../models/Login';
interface IPairPasswordNums {
  fisrtNum: number;
  secondNum: number;
}
@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.css',
})
export class PasswordFormComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService: FormService,
    private localStorageService: LocalStorageService,
    private AuthService: AuthenticationServiceService
  ) {}

  form!: FormGroup;
  title = 'testeLogin';
  //Uma mascara só para por no input enquanto password vai sendo preenchido
  passwordMask: string = '';
  erroMessage: string = '';

  private formDataSubscription: Subscription = new Subscription();
  public formData: any;

  ngOnInit() {
    this.form = this.fb.group({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
    });
  }

  sendForm() {
    this.formService.getFormData().subscribe((formValues) => {
      const login: Login = {
        cpf: formValues.cpf,
        password: this.form.value.password,
      };
      this.AuthService.login(login).subscribe((userLogged) => {
        this.localStorageService.saveLoggedUserLocalStorage(userLogged);
        this.router.navigate(['/minha-conta']);
        this.formService.clearFormData();
        this.form.reset();
      });
    });
  }
}
