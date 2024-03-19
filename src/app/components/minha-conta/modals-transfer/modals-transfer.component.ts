import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FirstTransferComponent } from './first-transfer/first-transfer.component';
import { SecondConfirmComponent } from './second-confirm/second-confirm.component';
import { ThirdSuccessComponent } from './third-success/third-success.component';

@Component({
  selector: 'app-modals-transfer',
  standalone: true,
  imports: [CommonModule, FirstTransferComponent, SecondConfirmComponent, ThirdSuccessComponent],
  templateUrl: './modals-transfer.component.html',
  styleUrl: './modals-transfer.component.css'
})
export class ModalsTransferComponent {

  @Output() nextStep: EventEmitter<void> = new EventEmitter<void>();
 

  current = 'transfer'; 

  switchToConfirmationPage(){
    this.current = 'subsequent';
  
  }

  switchToSuccess(){
    this.current = 'success';
  }

  switchToFirst(){
    this.current = 'transfer';
    
  }

  
}
