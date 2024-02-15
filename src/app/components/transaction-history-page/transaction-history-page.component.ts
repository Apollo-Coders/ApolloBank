import { Observable } from 'rxjs';
import { TransactionsService } from './../../services/transactions.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITransactionDisplay } from '../../utils/transactionToDisplay';

@Component({
  selector: 'app-transaction-history-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-history-page.component.html',
  styleUrl: './transaction-history-page.component.css',
})
export class TransactionHistoryPageComponent implements OnInit {
  paymentMethods = ['PIX', 'Transferência', 'Crédito'];
  transactionsDisplay$: Observable<ITransactionDisplay[]> = new Observable<
    ITransactionDisplay[]
  >();

  constructor(private transactionsService: TransactionsService) {}

  async ngOnInit() {
    this.transactionsService.setMockTransactions();
    this.transactionsDisplay$ = this.transactionsService.transactionsToDisplay$;
    console.log(this.transactionsDisplay$);
  }
}
