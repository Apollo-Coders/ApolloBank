import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Transaction } from '../../../../models/Transaction';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { TransactionsService } from '../../../../services/transactions.service';

@Component({
  selector: 'app-first-withdraw',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './first-withdraw.component.html',
  styleUrl: './first-withdraw.component.css'
})
export class FirstWithdrawComponent {

  withdrawForm!: FormGroup;

  @Output() formSubmittedTwo = new EventEmitter<void>();

  constructor(private localStorage: LocalStorageService, private transactionService: TransactionsService){}
  

  ngOnInit(){
    this.withdrawForm = new FormGroup({
      valor: new FormControl(''),
      valor2: new FormControl('')
      

    })
  }

  onSubmit() {
    if (this.withdrawForm.valid && this.localStorage.getLoggedUser() !== null) {
      const transactionData = this.withdrawForm.value; 
      const transaction = new Transaction(
        transactionData.null, 
        transactionData.amount,
        'O',
        transactionData.null,
        transactionData.this.localStorage.getLoggedUser().accountId, 
        new Date(),
        transactionData.null,
        transactionData.transactionType.withdraw,
        transactionData.this.localStorage.getLoggedUser().accountId,
        transactionData.null,
        transactionData.null
      );
      this.transactionService.MakeWithdrawal(transaction);
      this.withdrawForm.reset();
      this.formSubmittedTwo.emit();
    }


}

}
