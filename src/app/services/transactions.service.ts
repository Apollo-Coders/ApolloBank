import { DateFilterTypes } from './../enums/transactions';
import { Injectable, OnInit } from '@angular/core';
import { Transaction } from '../models/Transaction';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import {
  ITransactionDisplay,
  sortTransactionsByDate,
  transactionToDisplay,
} from '../utils/transactionToDisplay';
import { TransactionType } from '../enums/transactions';
import { transacionsJSON } from '../utils/transactionsmock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private _baseUrl = 'https://localhost:7171/api/Transactions/';

  //Subjects
  private transactionsSubject: BehaviorSubject<Transaction[]> =
    new BehaviorSubject<Transaction[]>([]);
  private transactionsToDisplaySubject: BehaviorSubject<ITransactionDisplay[]> =
    new BehaviorSubject<ITransactionDisplay[]>([]);

  // Filtros
  private _filterByTrans: boolean = false;
  private _filterByPix: boolean = false;
  private _filterByCredit: boolean = false;
  private _filterByDeposit: boolean = false;
  private _filterByWithdraw: boolean = false;
  private _searchFilterText: string = '';
  private _dateFilter: DateFilterTypes = DateFilterTypes.ALLTIME;

  // public Observables
  public transactions$: Observable<Transaction[]> =
    this.transactionsSubject.asObservable();
  public transactionsToDisplay$: Observable<ITransactionDisplay[]> =
    this.transactionsToDisplaySubject.asObservable();

  constructor(private http: HttpClient) {
    this.updateTransactions();
  }

  updateTransactions(): void {
    let action: string = '';
    if (this._dateFilter === DateFilterTypes.ALLTIME)
      action = 'GetAllTransactions';
    if (this._dateFilter === DateFilterTypes.LASTMONTH)
      action = 'GetCurrentMonthTransactions';
    if (this._dateFilter === DateFilterTypes.SIXMONTHS)
      action = 'GetLastSixMonthsTransactions';

    this.http
      .get<{ $id: number; $values: Transaction[] }>(this._baseUrl + action)
      .subscribe((responde) => {
        this.transactionsSubject.next(responde.$values);
        this.updateTransactionsToDisplay();
      });
  }

  MakeWithdrawal(transaction: Transaction): Observable<any> { // adding obs
    return this.http
      .post(this._baseUrl + 'MakeWithdrawal', transaction)
      .pipe(
        tap(() => this.updateTransactions()),
        catchError((err) => {
          alert(`Falha ao realizar transação: ${err.Message}`);
          console.error(err);
          throw err;
        })
      );
  }




  Makedeposit(transaction: Transaction): Observable<any> { // adding obs
    return this.http
      .post(this._baseUrl + 'Makedeposit', transaction)
      .pipe(
        tap(() => this.updateTransactions()),
        catchError((err) => {
          alert(`Falha ao realizar transação: ${err.Message}`);
          console.error(err);
          throw err;
        })
      );
  }



  Scheduletransaction(transaction: Transaction): void {
    this.http
      .post(this._baseUrl + 'Scheduletransaction', transaction)
      .pipe(tap(() => this.updateTransactions()))
      .subscribe({
        error: (err) => {
          alert(`Falha ao realizar transação: ${err.Message}`);
          console.error(err);
        },
      });
  }

  AddTransactionCredit(transaction: Transaction): void {
    this.http
      .post(this._baseUrl + 'AddTransactionCredit', transaction)
      .pipe(tap(() => this.updateTransactions()))
      .subscribe({
        error: (err) => {
          alert(`Falha ao realizar transação: ${err.Message}`);
          console.error(err);
        },
      });
  }



  AddTransaction(transaction: Transaction): Observable<any> { // adding obs
    return this.http
      .post(this._baseUrl + 'AddTransaction', transaction)
      .pipe(
        tap(() => this.updateTransactions()),
        catchError((err) => {
          alert(`Falha ao realizar transação: ${err.Message}`);
          console.error(err);
          throw err;
        })
      );
  }










  updateTransactionsToDisplay(): void {
    let filteredTransactions: Transaction[] = [];

    this.transactions$.subscribe((transactions) => {
      filteredTransactions = transactions;
    });

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

    if (!this._filterByCredit) {
      filteredTransactions = filteredTransactions.filter(
        (transaction) => transaction.transactionType !== TransactionType.CREDIT
      );
    }

    if (!this._filterByDeposit) {
      filteredTransactions = filteredTransactions.filter(
        (transaction) => transaction.transactionType !== TransactionType.DEPOSIT
      );
    }

    if (!this._filterByWithdraw) {
      filteredTransactions = filteredTransactions.filter(
        (transaction) =>
          transaction.transactionType !== TransactionType.WITHDRAW
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
      transactionToDisplay(sortTransactionsByDate(filteredTransactions))
    );
  }

  /*
    GETTERS - SETTERS
  */
  public get filterByTrans() {
    return this._filterByTrans;
  }
  public set filterByTrans(value: boolean) {
    this._filterByTrans = value;
    this.updateTransactionsToDisplay();
  }

  public get filterByPix() {
    return this._filterByPix;
  }
  public set filterByPix(value: boolean) {
    this._filterByPix = value;
    this.updateTransactionsToDisplay();
  }

  public get filterByCredit() {
    return this._filterByCredit;
  }
  public set filterByCredit(value: boolean) {
    this._filterByCredit = value;
    this.updateTransactionsToDisplay();
  }

  public get filterByDeposit() {
    return this._filterByDeposit;
  }
  public set filterByDeposit(value: boolean) {
    this._filterByDeposit = value;
    this.updateTransactionsToDisplay();
  }

  public get filterByWithdraw() {
    return this._filterByWithdraw;
  }
  public set filterByWithdraw(value: boolean) {
    this._filterByWithdraw = value;
    this.updateTransactionsToDisplay();
  }

  /* Date filter */
  public set dateFilter(filter: DateFilterTypes) {
    this._dateFilter = filter;
    this.updateTransactions();
  }
  public get dateFilter() {
    return this._dateFilter;
  }

  public set searchFilterText(value: string) {
    this._searchFilterText = value;
    this.updateTransactionsToDisplay();
  }
  public get searchFilterText() {
    return this._searchFilterText;
  }
}

/* setMockTransactions() {
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
  this.updateTransactions();
} */

/* private parseTransactionType(transactionTypeString: string): TransactionType {
  if (transactionTypeString === 'Pix') {
    return TransactionType.PIX;
  } else if (transactionTypeString === 'Crédito') {
    return TransactionType.CREDIT;
  } else if (transactionTypeString === 'Transferência') {
    return TransactionType.TRANSFER;
  } else {
    throw new Error();
  }
} */
