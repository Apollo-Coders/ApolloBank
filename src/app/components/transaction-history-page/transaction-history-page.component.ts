import { Observable } from 'rxjs';
import { TransactionsService } from './../../services/transactions.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITransactionDisplay } from '../../utils/transactionToDisplay';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarContaComponent } from '../shared/navbar-conta/navbar-conta.component';
import { DateFilterTypes } from '../../enums/transactions';

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
  searchFilter = '';
  dateFilter = DateFilterTypes.ALLTIME;

  constructor(private transactionsService: TransactionsService) {}

  async ngOnInit() {
    this.transactionsService.setMockTransactions();
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
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
  }

  handleSearchFilterChange() {
    this.transactionsService.searchFilterText = this.searchFilter;
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
  }

  handleDateFilter(filter: DateFilterTypes) {
    this.dateFilter = filter;
    this.transactionsService.dateFilter = this.dateFilter;
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
  }

  lastMonthFilter() {
    this.dateFilter = DateFilterTypes.LASTMONTH;
    this.transactionsService.dateFilter = this.dateFilter;
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
  }
  sixMonthFilter() {
    this.dateFilter = DateFilterTypes.LASTMONTH;
    this.transactionsService.dateFilter = this.dateFilter;
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
  }
  allTimeFilter() {
    this.dateFilter = DateFilterTypes.LASTMONTH;
    this.transactionsService.dateFilter = this.dateFilter;
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
