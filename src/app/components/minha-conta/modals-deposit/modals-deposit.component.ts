import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { SuccessDepositComponent } from './success-deposit/success-deposit.component';
import { FirstDepositComponent } from './first-deposit/first-deposit.component';

@Component({
  selector: 'app-modals-deposit',
  standalone: true,
  imports: [CommonModule, SuccessDepositComponent, FirstDepositComponent],
  templateUrl: './modals-deposit.component.html',
  styleUrl: './modals-deposit.component.css'
})
export class ModalsDepositComponent {

  

  current = 'deposit'

  switchToConfirmationPage(){
    this.current = 'success'
  }

  switchToDeposit(){
    this.current = 'deposit'
  }

}
