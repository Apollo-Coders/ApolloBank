import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FirstDepositComponent } from '../modals-deposit/first-deposit/first-deposit.component';
import { SecondConfirmComponent } from '../modals-transfer/second-confirm/second-confirm.component';
import { FirstWithdrawComponent } from './first-withdraw/first-withdraw.component';
import { SecondSuccessComponent } from './second-success/second-success.component';

@Component({
  selector: 'app-modals-withdraw',
  standalone: true,
  imports: [CommonModule, FirstWithdrawComponent, SecondSuccessComponent],
  templateUrl: './modals-withdraw.component.html',
  styleUrl: './modals-withdraw.component.css'
})
export class ModalsWithdrawComponent {

  current = 'withdraw'

  switchToConfirmationPage(){
    this.current = 'success'
  }

}
