import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarContaComponent } from '../shared/navbar-conta/navbar-conta.component';
import * as bootstrap from 'bootstrap';
import { FormsModule } from '@angular/forms';
import { CreditCard } from '../../models/CreditCard';

interface ICardLimitSet {
  CardNum: string;
  actualLimit: number;
  newLimit: number;
  maxLimit: number;
}

@Component({
  selector: 'app-credit-cards',
  standalone: true,
  imports: [NavbarContaComponent, FormsModule],
  templateUrl: './credit-cards.component.html',
  styleUrl: './credit-cards.component.css',
})
export class CreditCardsComponent {
  cardLimitSet: ICardLimitSet = {
    CardNum: '',
    actualLimit: 700,
    newLimit: 700,
    maxLimit: 1200,
  };

  creditCards: CreditCard[] = [
    new CreditCard(
      3213123,
      false,
      '32323244324234234',
      323,
      new Date(),
      333.33,
      500
    ),
  ];

  totalCreditUsedInvoice(): number {
    return this.creditCards.reduce((total, card) => total + card.creditUsed, 0);
  }

  setNewLimit(creditCard: CreditCard) {
    this.cardLimitSet.CardNum = creditCard.number;
    this.cardLimitSet.actualLimit = creditCard.creditLimit;
    this.cardLimitSet.newLimit = creditCard.creditLimit;
    this.cardLimitSet.maxLimit = 1000;
  }

  blockCreditCard(cardNum: string) {
    /* bloquear cartão no service */
  }

  payCardInvoice(cardNum: string) {
    /* pagar cartão no service */
  }

  porAlgumMotivoOModalSoAbreSeEssaFuncaoEstiverNoCodigo() {
    const modal = new bootstrap.Modal('');
    modal.show();
  }
}
