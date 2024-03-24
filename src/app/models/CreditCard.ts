export class CreditCard {
  id: number;
  isBlocked: boolean;
  number: string;
  cvc: number;
  expirationTime: Date;
  creditUsed: number;
  creditLimit: number;

  constructor(
    id: number,
    isBlocked: boolean,
    number: string,
    cvc: number,
    expirationTime: Date,
    creditUsed: number,
    creditLimit: number
  ) {
    this.id = id;
    this.isBlocked = isBlocked;
    this.number = number;
    this.cvc = cvc;
    this.expirationTime = expirationTime;
    this.creditUsed = creditUsed;
    this.creditLimit = creditLimit;
  }
}
