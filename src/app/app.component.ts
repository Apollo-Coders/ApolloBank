import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterFormComponent } from './components/shared/register-form/register-form.component';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RegisterFormComponent]
})
export class AppComponent {
  title = 'ApolloBank';
}
