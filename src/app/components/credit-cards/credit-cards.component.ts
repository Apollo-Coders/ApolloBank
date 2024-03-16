import { Component } from '@angular/core';
import { NavbarContaComponent } from '../shared/navbar-conta/navbar-conta.component';

@Component({
  selector: 'app-credit-cards',
  standalone: true,
  imports: [NavbarContaComponent],
  templateUrl: './credit-cards.component.html',
  styleUrl: './credit-cards.component.css',
})
export class CreditCardsComponent {}
