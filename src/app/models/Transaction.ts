import { TransactionType } from '../enums/transactions';

export class Transaction {
  id: string | null;
  amount: number;
  to: string | null;
  from: string | null;
  date: Date;
  description: string;
  transactionType: TransactionType;
  direction: 'I' | 'O';
  accountId: number;
  scheduledDate: Date | null;
  transactionStatusChecker: Date | null;

  constructor(
    id: string | null,
    amount: number,
    direction: 'I' | 'O',
    to: string | null,
    from: string | null,
    date: Date,
    description: string,
    transactionType: TransactionType,
    accountId: number,
    scheduledDate: Date | null,
    transactionStatusChecker: Date | null
  ) {
    this.id = id;
    this.amount = amount;
    this.direction = direction;
    this.to = to;
    this.from = from;
    this.date = date;
    this.description = description;
    this.transactionType = transactionType;
    this.accountId = accountId;
    this.scheduledDate = scheduledDate;
    this.transactionStatusChecker = transactionStatusChecker;
  }
}
