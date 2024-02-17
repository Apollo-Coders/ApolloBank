import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LoginFormComponent } from '../shared/login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { PasswordFormComponent } from '../shared/password-form/password-form.component';



@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [NavbarComponent, LoginFormComponent, CommonModule, PasswordFormComponent ],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  navbarButton = 'Abra sua conta';
  route="/register";
  currentForm = 'register';

  FormLogin:boolean= true;
  FormPassword:boolean= false; 

  switchToSubsequentForm() {
   this.FormLogin = false;
   this.FormPassword = true;
  }

  handlePasswordMaskChanged() {
    this.FormLogin = true;
    this.FormPassword = false;
   }

}