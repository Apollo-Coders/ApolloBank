import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LoginFormComponent } from '../shared/login-form/login-form.component';



@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [NavbarComponent, LoginFormComponent ],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  navbarButton = 'Abra sua conta';
  route="/register"
}
