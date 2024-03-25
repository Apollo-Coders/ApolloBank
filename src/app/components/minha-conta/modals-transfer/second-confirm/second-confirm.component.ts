import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormService } from '../../../../services/form.service';
import { TransactionsService } from '../../../../services/transactions.service';
import { Transaction } from '../../../../models/Transaction';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { TransactionType } from '../../../../enums/transactions';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-second-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-confirm.component.html',
  styleUrl: './second-confirm.component.css'
})
export class SecondConfirmComponent {

  constructor (private formService: FormService, private transactionService: TransactionsService, private localStorage: LocalStorageService) {

  }


  @Output() nextStep = new EventEmitter<void>();
  accountNumber!: number;
  payload!: Transaction;

  ngOnInit(){
    this.accountNumber = this.localStorage.getLoggedUser().accountNumber
    this.formService.getFormData().subscribe(data => {
      const transaction = new Transaction(
        null,
        data.valor,
        'O',
        data.conta,
        this.localStorage.getLoggedUser().accountNumber.toString(),
        new Date(),
        data.descricao,
        TransactionType.TRANSFER,
        this.localStorage.getLoggedUser().accountId,
        data.null,
        data.null
      );
      this.payload = transaction
    })
  }

  goToNextStep() {

    this.transactionService.AddTransaction(this.payload).subscribe(() => {
      this.nextStep.emit();

    });

  }

  @Output() goBack = new EventEmitter<void>();

  goBackClicked() {
    this.goBack.emit();
  }


}