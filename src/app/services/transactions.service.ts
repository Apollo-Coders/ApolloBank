import { Injectable } from '@angular/core';
import { Transaction, TransactionType } from '../models/Transaction';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  ITransactionDisplay,
  sortTransactionsByDate,
  transactionToDisplay,
} from '../utils/transactionToDisplay';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private transactionsSubject: BehaviorSubject<Transaction[]> =
    new BehaviorSubject<Transaction[]>([]);
  private transactionsToDisplaySubject: BehaviorSubject<ITransactionDisplay[]> =
    new BehaviorSubject<ITransactionDisplay[]>([]);

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
    // Aqui você pode fazer qualquer processamento que desejar para atualizar transactionsToDisplay
    // Por exemplo, filtrar ou mapear transactions
    this.transactionsToDisplaySubject.next(transactionToDisplay(transactions));
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
    return TransactionType[
      transactionTypeString as keyof typeof TransactionType
    ];
  }
}

const transacionsJSON = [
  {
    amount: 312.34,
    direction: '-',
    to: 'Ruan',
    from: null,
    date: '2024-02-14T10:34:52.329Z',
    description: 'Para Ruan',
    transactionType: 'Transfência',
  },
  {
    amount: 121.24,
    direction: '+',
    to: 'Felipe',
    from: null,
    date: '2024-02-13T10:34:52.329Z',
    description: 'Para Felipe',
    transactionType: 'Transfência',
  },
  {
    amount: 823.874,
    direction: '-',
    to: 'Jack',
    from: null,
    date: '2024-02-12T10:34:52.329Z',
    description: 'Para Jack',
    transactionType: 'Transfência',
  },
  {
    amount: 95.228,
    direction: '+',
    to: null,
    from: 'David',
    date: '2024-01-22T13:47:39.821Z',
    description: 'Enviado por David',
    transactionType: 'Transfência',
  },
  {
    amount: 387.157,
    direction: '-',
    to: 'Mia',
    from: null,
    date: '2024-01-01T06:17:29.516Z',
    description: 'Para Mia',
    transactionType: 'Transfência',
  },
  {
    amount: 211.337,
    direction: '+',
    to: null,
    from: 'Mia',
    date: '2023-01-25T03:07:02.181Z',
    description: 'Enviado por Mia',
    transactionType: 'Transfência',
  },
  {
    amount: 28.507,
    direction: '-',
    to: 'Charlie',
    from: null,
    date: '2023-01-20T14:58:06.108Z',
    description: 'Para Charlie',
    transactionType: 'Transfência',
  },
  {
    amount: 544.081,
    direction: '+',
    to: null,
    from: 'Frank',
    date: '2024-02-12T17:10:28.982Z',
    description: 'Enviado por Frank',
    transactionType: 'Transfência',
  },
  {
    amount: 806.558,
    direction: '+',
    to: null,
    from: 'Jack',
    date: '2023-01-31T12:25:34.428Z',
    description: 'Enviado por Jack',
    transactionType: 'Transfência',
  },
  {
    amount: 557.889,
    direction: '-',
    to: 'Olivia',
    from: null,
    date: '2023-01-21T16:05:52.072Z',
    description: 'Para Olivia',
    transactionType: 'Transfência',
  },
  {
    amount: 934.883,
    direction: '+',
    to: null,
    from: 'Olivia',
    date: '2023-01-15T21:52:07.398Z',
    description: 'Enviado por Olivia',
    transactionType: 'Transfência',
  },
  {
    amount: 688.687,
    direction: '-',
    to: 'David',
    from: null,
    date: '2024-02-05T09:33:12.472Z',
    description: 'Para David',
    transactionType: 'Transfência',
  },
  {
    amount: 353.428,
    direction: '-',
    to: 'Emma',
    from: null,
    date: '2023-02-09T06:51:24.625Z',
    description: 'Para Emma',
    transactionType: 'Transfência',
  },
  {
    amount: 992.396,
    direction: '-',
    to: 'Katie',
    from: null,
    date: '2024-01-18T19:47:08.332Z',
    description: 'Para Katie',
    transactionType: 'Transfência',
  },
  {
    amount: 438.533,
    direction: '+',
    to: null,
    from: 'Liam',
    date: '2024-01-28T09:28:17.127Z',
    description: 'Enviado por Liam',
    transactionType: 'Transfência',
  },
  {
    amount: 778.448,
    direction: '-',
    to: 'Henry',
    from: null,
    date: '2023-01-28T21:43:02.953Z',
    description: 'Para Henry',
    transactionType: 'Transfência',
  },
  {
    amount: 379.166,
    direction: '+',
    to: null,
    from: 'Katie',
    date: '2023-01-30T15:01:23.394Z',
    description: 'Enviado por Katie',
    transactionType: 'Transfência',
  },
];
