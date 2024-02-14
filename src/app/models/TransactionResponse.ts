export enum TransactionType {
  /* DEPOSIT = 'Deposito',
  WITHDRAW = 'Saque', */
  TRANSFER = 'Transfência',
}

export class TransactionResponse {
  amount: number;
  to: string | null;
  from: string | null;
  date: Date;
  description: string;
  transactionType: TransactionType;
  direction: '+' | '-';

  constructor(
    amount: number,
    direction: '+' | '-',
    to: string | null,
    from: string | null,
    date: Date,
    description: string,
    transactionType: TransactionType
  ) {
    this.amount = amount;
    this.direction = direction;
    this.to = to;
    this.from = from;
    this.date = date;
    this.description = description;
    this.transactionType = transactionType;
  }
}
