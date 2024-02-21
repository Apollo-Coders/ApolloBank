import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { SupportComponent } from './components/support/support.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent {
  title = 'ApolloBank';
}
