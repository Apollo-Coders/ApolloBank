import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { TransactionHistoryPageComponent } from './components/transaction-history-page/transaction-history-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RegisterPageComponent,
    TransactionHistoryPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ApolloBank';
}
