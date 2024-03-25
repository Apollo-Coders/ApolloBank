import { InvoiceService } from './../../services/invoice.service';
import { Observable } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarContaComponent } from '../shared/navbar-conta/navbar-conta.component';
import * as bootstrap from 'bootstrap';
import { FormsModule } from '@angular/forms';
import { CreditCard } from '../../models/CreditCard';
import { CommonModule } from '@angular/common';
import { CreditCardsService } from '../../services/credit-cards.service';
import { SetCardLimit } from '../../models/SetCardLimit';
import { LocalStorageService } from '../../services/local-storage.service';

interface ICardLimitSet {
  CardNum: string;
  actualLimit: number;
  newLimit: number;
  maxLimit: number;
}

@Component({
  selector: 'app-credit-cards',
  standalone: true,
  imports: [NavbarContaComponent, FormsModule, CommonModule],
  templateUrl: './credit-cards.component.html',
  styleUrl: './credit-cards.component.css',
})
export class CreditCardsComponent implements OnInit {
  cardLimitSet: ICardLimitSet = {
    CardNum: '',
    actualLimit: 700,
    newLimit: 700,
    maxLimit: 1200,
  };
  blockCardNum = '';
  payCard: { number: string; value: number } = {
    number: '',
    value: 0,
  };

  creditCards$: Observable<CreditCard[]> = new Observable<CreditCard[]>();

  constructor(
    private readonly creditCardsService: CreditCardsService,
    private readonly localStorageService: LocalStorageService,
    private readonly invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    this.creditCards$ = this.creditCardsService.creditCards$;
  }

  totalCreditUsedInvoice(): number {
    let total: number = 0;

    this.creditCards$.subscribe((creditCards) => {
      total = creditCards.reduce((total, card) => total + card.creditUsed, 0);
    });

    return total;
  }

  getAvailableLimit(creditCard: CreditCard) {
    return creditCard.creditLimit - creditCard.creditUsed;
  }

  totalCreditAvailableInvoice(): number {
    let total: number = 0;

    this.creditCards$.subscribe((creditCards) => {
      total = creditCards.reduce(
        (total, card) => total + this.getAvailableLimit(card),
        0
      );
    });

    return total;
  }

  createCreditCard() {
    this.creditCardsService.createCreditCard();
  }

  setNewLimit(creditCard: CreditCard) {
    this.cardLimitSet.CardNum = creditCard.number;
    this.cardLimitSet.actualLimit = creditCard.creditLimit;
    this.cardLimitSet.newLimit = creditCard.creditLimit;
    this.cardLimitSet.maxLimit = 1000; //pegar do creditcards
  }

  updateLimit() {
    let accountId = this.localStorageService.getLoggedUser().accountId;
    let setlimit = new SetCardLimit(
      this.cardLimitSet.newLimit,
      accountId,
      this.cardLimitSet.CardNum
    );

    this.creditCardsService.setCardLimit(setlimit);
  }

  setBlockCard(cardNum: string) {
    this.blockCardNum = cardNum;
  }
  blockCreditCard() {
    /* bloquear cartão no service */
    this.creditCardsService.blockCreditCard(this.blockCardNum);
  }

  setPayCard(number: string, value: number) {
    this.payCard.number = number;
    this.payCard.value = value;
  }
  payCardInvoice() {
    this.invoiceService.payParcialMonthInvoice(this.payCard.number);
  }

  payTotalInvoice() {
    this.invoiceService.payTotalMonthInvoice();
  }

  dateStringToDate(datestring: string | Date) {
    return new Date(datestring);
  }

  porAlgumMotivoOModalSoAbreSeEssaFuncaoEstiverNoCodigo() {
    const modal = new bootstrap.Modal('');
    modal.show();
  }
}
