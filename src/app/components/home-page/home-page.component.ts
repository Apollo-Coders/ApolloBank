import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { SectionsComponent } from '../../sections/sections/sections.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ NavbarComponent, FooterComponent, SectionsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
