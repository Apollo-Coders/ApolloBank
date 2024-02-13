import { Component } from '@angular/core';
import { RegisterFormComponent } from '../shared/register-form/register-form.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';


@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RegisterFormComponent, NavbarComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

}
