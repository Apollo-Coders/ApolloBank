import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";


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
