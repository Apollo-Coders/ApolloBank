import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Transaction } from '../../../../models/Transaction';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { TransactionsService } from '../../../../services/transactions.service';
import { TransactionType } from '../../../../enums/transactions';

@Component({
  selector: 'app-first-withdraw',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './first-withdraw.component.html',
  styleUrl: './first-withdraw.component.css'
})
export class FirstWithdrawComponent {

  withdrawForm!: FormGroup;
  error = false;

  @Output() formSubmittedTwo = new EventEmitter<void>();

  constructor(private localStorage: LocalStorageService, private transactionService: TransactionsService){}


  ngOnInit(){
    this.withdrawForm = new FormGroup({
      valor: new FormControl(''),
      valor2: new FormControl('')


    })
  }


  onSubmit() {
    this.error = false;
    if (this.withdrawForm.valid ) {
      if( this.withdrawForm.value.valor !== this.withdrawForm.value.valor2){
        this.error = true;
        return;
      }
      const transactionData = this.withdrawForm.value;
      const transaction = new Transaction(
        null,
        transactionData.valor,
        'O',
        transactionData.null,
        this.localStorage.getLoggedUser().accountNumber.toString(),
        new Date(),
        transactionData.null,
        TransactionType.WITHDRAW,
        this.localStorage.getLoggedUser().accountId,
        transactionData.null,
        transactionData.null
      );
      this.transactionService.MakeWithdrawal(transaction).subscribe(msg => {

        this.withdrawForm.reset();
      this.formSubmittedTwo.emit();
      
      });


    }




}

}
