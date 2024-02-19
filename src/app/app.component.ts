import { CommonModule } from '@angular/common';

import { RouterOutlet, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { Component } from '@angular/core';




@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'ApolloBank';
}
