import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { SubsequentRegistrationPageComponent } from './components/subsequent-registration-page/subsequent-registration-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RegisterPageComponent, SubsequentRegistrationPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ApolloBank';
}
