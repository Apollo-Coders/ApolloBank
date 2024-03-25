import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Transaction } from '../../../../models/Transaction';
import { TransactionsService } from '../../../../services/transactions.service';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { TransactionType } from '../../../../enums/transactions';

@Component({
  selector: 'app-first-deposit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './first-deposit.component.html',
  styleUrl: './first-deposit.component.css'
})
export class FirstDepositComponent {

  depositForm!: FormGroup;

  @Output() formSubmittedThree = new EventEmitter<void>();

  constructor(private localStorage: LocalStorageService, private transactionService: TransactionsService){}

  error:boolean = false;

  ngOnInit(){
    this.depositForm = new FormGroup({
      valor: new FormControl('', [Validators.required]),
      valor2: new FormControl('', [Validators.required])
      

    })
  }

  onSubmit() {
    this.error = false;
    if (this.depositForm.valid ) {
      
      const transactionData = this.depositForm.value;
      const transaction = new Transaction(
        null,
        transactionData.valor,
        'I',
        transactionData.null,
        this.localStorage.getLoggedUser().accountNumber.toString(),
        new Date(),
        transactionData.null,
        TransactionType.DEPOSIT,
        this.localStorage.getLoggedUser().accountId,
        transactionData.null,
        transactionData.null
      );
      this.transactionService.Makedeposit(transaction).subscribe(msg => {

        this.depositForm.reset();
      this.formSubmittedThree.emit();
      
      });


    }




}


}


    


    