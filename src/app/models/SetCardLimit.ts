export class SetCardLimit {
  newLimit: number;
  accountId: number;
  cardNum: string;

  constructor(newLimit: number, accountId: number, cardNum: string) {
    this.newLimit = newLimit;
    this.accountId = accountId;
    this.cardNum = cardNum;
  }
}
