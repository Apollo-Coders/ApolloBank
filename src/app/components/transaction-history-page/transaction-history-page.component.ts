import { Observable } from 'rxjs';
import { TransactionsService } from './../../services/transactions.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITransactionDisplay } from '../../utils/transactionToDisplay';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarContaComponent } from '../shared/navbar-conta/navbar-conta.component';
import { DateFilterTypes, TransactionType } from '../../enums/transactions';
import { Transaction } from '../../models/Transaction';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-transaction-history-page',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarContaComponent, RouterLink],
  templateUrl: './transaction-history-page.component.html',
  styleUrl: './transaction-history-page.component.css',
})
export class TransactionHistoryPageComponent implements OnInit {
  DateFilterTypes = DateFilterTypes;
  filterOpen = true;
  paymentMethods = ['PIX', 'Transferência', 'Crédito'];
  transactionsDisplay$: Observable<ITransactionDisplay[]> = new Observable<
    ITransactionDisplay[]
  >();
  filterByPix = true;
  filterByTrans = true;
  filterByCredit = true;
  filterByDeposit = true;
  filterByWithdraw = true;
  searchFilter = '';
  dateFilter = DateFilterTypes.ALLTIME;

  constructor(private transactionsService: TransactionsService) {}

  async ngOnInit() {
    this.transactionsService.filterByPix = this.filterByPix;
    this.transactionsService.filterByTrans = this.filterByTrans;
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
  }

  toggleFilter() {
    this.filterOpen = !this.filterOpen;
  }

  toggleFitlerByPix() {
    this.transactionsService.filterByPix = this.filterByPix;
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
  }

  toggleFitlerByTrans() {
    this.transactionsService.filterByTrans = this.filterByTrans;
  }

  toggleFitlerByCredit() {
    this.transactionsService.filterByCredit = this.filterByCredit;
  }

  toggleFitlerByDeposit() {
    this.transactionsService.filterByDeposit = this.filterByDeposit;
  }

  toggleFitlerByWithdraw() {
    this.transactionsService.filterByWithdraw = this.filterByWithdraw;
  }

  handleSearchFilterChange() {
    this.transactionsService.searchFilterText = this.searchFilter;
  }

  handleDateFilter(filter: DateFilterTypes) {
    this.dateFilter = filter;
    this.transactionsService.dateFilter = this.dateFilter;
  }

  lastMonthFilter() {
    this.dateFilter = DateFilterTypes.LASTMONTH;
    this.transactionsService.dateFilter = this.dateFilter;
  }
  sixMonthFilter() {
    this.dateFilter = DateFilterTypes.LASTMONTH;
    this.transactionsService.dateFilter = this.dateFilter;
  }
  allTimeFilter() {
    this.dateFilter = DateFilterTypes.LASTMONTH;
    this.transactionsService.dateFilter = this.dateFilter;
  }

  resetFilters() {
    this.filterByPix = true;
    this.filterByTrans = true;
    this.filterByCredit = true;
    this.filterByDeposit = true;
    this.filterByWithdraw = true;
    this.transactionsService.filterByTrans = this.filterByTrans;
    this.transactionsService.filterByPix = this.filterByPix;
    this.transactionsService.filterByCredit = this.filterByCredit;
    this.transactionsService.filterByDeposit = this.filterByDeposit;
    this.transactionsService.filterByWithdraw = this.filterByWithdraw;
  }

  dateStringToDate(datestring: string | Date) {
    return new Date(datestring);
  }
}
