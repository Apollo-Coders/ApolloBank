import { TransactionType } from '../enums/transactions';

export class Transaction {
  id: string | null;
  amount: number;
  to: string | null;
  from: string | null;
  date: Date;
  description: string;
  transactionType: TransactionType;
  direction: '+' | '-';

  constructor(
    id: string | null,
    amount: number,
    direction: '+' | '-',
    to: string | null,
    from: string | null,
    date: Date,
    description: string,
    transactionType: TransactionType
  ) {
    this.id = id;
    this.amount = amount;
    this.direction = direction;
    this.to = to;
    this.from = from;
    this.date = date;
    this.description = description;
    this.transactionType = transactionType;
  }
}
