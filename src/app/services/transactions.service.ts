import { DateFilterTypes } from './../enums/transactions';
import { Injectable } from '@angular/core';
import { Transaction } from '../models/Transaction';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  ITransactionDisplay,
  sortTransactionsByDate,
  transactionToDisplay,
} from '../utils/transactionToDisplay';
import { TransactionType } from '../enums/transactions';
import { transacionsJSON } from '../utils/transactionsmock';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private transactionsSubject: BehaviorSubject<Transaction[]> =
    new BehaviorSubject<Transaction[]>([]);
  private transactionsToDisplaySubject: BehaviorSubject<ITransactionDisplay[]> =
    new BehaviorSubject<ITransactionDisplay[]>([]);
  private _filterByTrans: boolean = false;
  private _filterByPix: boolean = true;
  private _searchFilterText: string = '';
  private _dateFilter: DateFilterTypes = DateFilterTypes.ALLTIME;

  public transactions$: Observable<Transaction[]> =
    this.transactionsSubject.asObservable();
  public transactionsToDisplay$: Observable<ITransactionDisplay[]> =
    this.transactionsToDisplaySubject.asObservable();

  constructor() {}

  updateTransactions(transactions: Transaction[]): void {
    this.transactionsSubject.next(transactions);
    this.updateTransactionsToDisplay(transactions);
  }

  updateTransactionsToDisplay(transactions: Transaction[]): void {
    let filteredTransactions = transactions;

    filteredTransactions = this.filterTransactionsByDate(filteredTransactions);

    if (!this._filterByTrans) {
      filteredTransactions = filteredTransactions.filter(
        (transaction) =>
          transaction.transactionType !== TransactionType.TRANSFER
      );
    }
    if (!this._filterByPix) {
      filteredTransactions = filteredTransactions.filter(
        (transaction) => transaction.transactionType !== TransactionType.PIX
      );
    }
    if (this._searchFilterText !== '') {
      const searchText = this._searchFilterText.toLowerCase();
      filteredTransactions = filteredTransactions.filter(
        (transaction) =>
          transaction.description.toLowerCase().includes(searchText) ||
          transaction.from?.toLowerCase().includes(searchText) ||
          transaction.to?.toLowerCase().includes(searchText) ||
          transaction.amount.toString().toLowerCase().includes(searchText)
      );
    }

    /* Atualiza transactionsToDisplaySubject com os dados de filteredTransactions  */
    this.transactionsToDisplaySubject.next(
      transactionToDisplay(filteredTransactions)
    );
  }

  /*
    GETTERS - SETTERS
  */

  public set filterByTrans(value: boolean) {
    this._filterByTrans = value;
    this.updateTransactionsToDisplay(this.transactionsSubject.getValue());
  }
  public get filterByTrans() {
    return this._filterByTrans;
  }

  public set filterByPix(value: boolean) {
    this._filterByPix = value;
    this.updateTransactionsToDisplay(this.transactionsSubject.getValue());
  }
  public get filterByPix() {
    return this._filterByPix;
  }

  public set dateFilter(filter: DateFilterTypes) {
    this._dateFilter = filter;
    this.updateTransactionsToDisplay(this.transactionsSubject.getValue());
  }
  public get dateFilter() {
    return this._dateFilter;
  }

  public set searchFilterText(value: string) {
    this._searchFilterText = value;
    this.updateTransactionsToDisplay(this.transactionsSubject.getValue());
  }
  public get searchFilterText() {
    return this._searchFilterText;
  }

  setMockTransactions() {
    const transactionProvisore: Transaction[] = [];
    transacionsJSON.forEach((obj) => {
      const {
        amount,
        direction,
        to,
        from,
        date,
        description,
        transactionType,
      } = obj;
      const parsedTransactionType = this.parseTransactionType(transactionType);
      const parsedDate = new Date(date);
      const transaction = new Transaction(
        null,
        amount,
        direction as '+' | '-',
        to,
        from,
        parsedDate,
        description,
        parsedTransactionType
      );
      transactionProvisore.push(transaction);
    });
    this.updateTransactions(sortTransactionsByDate(transactionProvisore));
  }

  private parseTransactionType(transactionTypeString: string): TransactionType {
    if (transactionTypeString === 'Pix') {
      return TransactionType.PIX;
    } else if (transactionTypeString === 'Crédito') {
      return TransactionType.CREDIT;
    } else {
      //(transactionTypeString === 'Transferência')
      return TransactionType.TRANSFER;
    }
    /* return TransactionType[
      transactionTypeString as keyof typeof TransactionType
    ]; */
  }

  private filterTransactionsByDate(transactions: Transaction[]): Transaction[] {
    switch (this._dateFilter) {
      case DateFilterTypes.LASTMONTH:
        return transactions.filter(
          (transaction) =>
            new Date().getMonth() === transaction.date.getMonth() &&
            new Date().getFullYear() === transaction.date.getFullYear()
        );
      case DateFilterTypes.SIXMONTHS:
        return transactions.filter(
          (transaction) =>
            Math.abs(
              new Date().getMonth() -
                transaction.date.getMonth() +
                12 * (new Date().getFullYear() - transaction.date.getFullYear())
            ) < 6
        );
      case DateFilterTypes.ALLTIME:
      default:
        return transactions;
    }
  }
}
