import { Observable } from 'rxjs';
import { TransactionsService } from './../../services/transactions.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITransactionDisplay } from '../../utils/transactionToDisplay';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarContaComponent } from '../../shared/navbar-conta/navbar-conta.component';

@Component({
  selector: 'app-transaction-history-page',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarContaComponent, RouterLink],
  templateUrl: './transaction-history-page.component.html',
  styleUrl: './transaction-history-page.component.css',
})
export class TransactionHistoryPageComponent implements OnInit {
  filterOpen = true;
  paymentMethods = ['PIX', 'Transferência', 'Crédito'];
  transactionsDisplay$: Observable<ITransactionDisplay[]> = new Observable<
    ITransactionDisplay[]
  >();
  filterByPix = false;
  filterByTrans = true;
  searchFilter = '';

  constructor(private transactionsService: TransactionsService) {}

  async ngOnInit() {
    this.transactionsService.setMockTransactions();
    this.transactionsService.filterByPix = this.filterByPix;
    this.transactionsService.filterByTrans = this.filterByTrans;
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
    /* this.transactionsDisplay$.subscribe((d) => console.log(d)); */
  }

  toggleFilter() {
    this.filterOpen = !this.filterOpen;
  }

  toggleFitlerByPix() {
    /* o NgModel já atualiza sozinha o valor da variável */
    this.transactionsService.filterByPix = this.filterByPix;
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
  }

  toggleFitlerByTrans() {
    /* o NgModel já atualiza sozinha o valor da variável */
    this.transactionsService.filterByTrans = this.filterByTrans;
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
  }

  handleSearchFilterChange() {
    console.log(this.searchFilter);
    this.transactionsService.searchFilterText = this.searchFilter;
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
  }

  resetFilters() {
    this.filterByPix = true;
    this.filterByTrans = true;
    this.transactionsService.filterByTrans = this.filterByTrans;
    this.transactionsService.filterByPix = this.filterByPix;
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
  }
}
