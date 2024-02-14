import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SubsequentFormComponent } from '../shared/subsequent-form/subsequent-form.component';

@Component({
  selector: 'app-subsequent-registration-page',
  standalone: true,
  imports: [NavbarComponent, SubsequentFormComponent],
  templateUrl: './subsequent-registration-page.component.html',
  styleUrl: './subsequent-registration-page.component.css'
})
export class SubsequentRegistrationPageComponent {

}
