import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { PasswordFormComponent } from '../shared/password-form/password-form.component';

@Component({
  selector: 'app-login-password',
  standalone: true,
  imports: [NavbarComponent, PasswordFormComponent],
  templateUrl: './login-password.component.html',
  styleUrl: './login-password.component.css'
})
export class LoginPasswordComponent {

}
