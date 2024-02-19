import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterOutlet, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
=======
import { RouterOutlet, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
>>>>>>> feature/minha-conta



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
