import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  route = "/login";
  navbarButton = 'Acesse sua conta';
}
