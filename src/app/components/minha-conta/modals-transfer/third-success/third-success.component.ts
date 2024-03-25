import { Component, EventEmitter, Output } from '@angular/core';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { FormService } from '../../../../services/form.service';
import { Transaction } from '../../../../models/Transaction';
import { TransactionType } from '../../../../enums/transactions';

@Component({
  selector: 'app-third-success',
  standalone: true,
  imports: [],
  templateUrl: './third-success.component.html',
  styleUrl: './third-success.component.css'
})
export class ThirdSuccessComponent {

  @Output() repeatTransaction = new EventEmitter<void>();
  payload!: Transaction;

  constructor (private formService: FormService, private localStorage: LocalStorageService) {

  }

  ngOnInit() {
    this.formService.getFormData().subscribe(data => {
      const transaction = new Transaction(
        null,
        data.valor,
        'O',
        data.conta,
        this.localStorage.getLoggedUser().accountNumber.toString(),
        new Date(),
        data.null,
        TransactionType.TRANSFER,
        this.localStorage.getLoggedUser().accountId,
        data.null,
        data.null
      );
      this.payload = transaction
    })
  }



  addTransaction(){
    this.repeatTransaction.emit();
  }

}
