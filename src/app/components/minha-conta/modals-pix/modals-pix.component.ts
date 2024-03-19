import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainPixComponent } from './main-pix/main-pix.component';
import { FirstTransferComponent } from '../modals-transfer/first-transfer/first-transfer.component';
import { SecondConfirmComponent } from '../modals-transfer/second-confirm/second-confirm.component';
import { ThirdSuccessComponent } from '../modals-transfer/third-success/third-success.component';
import { FirstDepositComponent } from '../modals-deposit/first-deposit/first-deposit.component';
import { SuccessDepositComponent } from '../modals-deposit/success-deposit/success-deposit.component';
import { FirstScheduleComponent } from '../modals-scheduling/first-schedule/first-schedule.component';
import { ConfirmSchedulingComponent } from '../modals-scheduling/confirm-scheduling/confirm-scheduling.component';
import { SchedulingSuccessComponent } from '../modals-scheduling/scheduling-success/scheduling-success.component';

@Component({
  selector: 'app-modals-pix',
  standalone: true,
  imports: [CommonModule, MainPixComponent, FirstTransferComponent, SecondConfirmComponent, ThirdSuccessComponent, FirstDepositComponent, SuccessDepositComponent, FirstScheduleComponent, ConfirmSchedulingComponent, SchedulingSuccessComponent],
  templateUrl: './modals-pix.component.html',
  styleUrl: './modals-pix.component.css'
})
export class ModalsPixComponent {

  current = 'main'


  switchToMain(){
    this.current = 'main'
  }

  switchToTransferPage(){
    this.current = 'firstTransfer'
  }

  switchToSecondTransfer(){
    this.current = 'secondTransfer'
  }


  switchToFirst(){
    this.current = 'firstTransfer';
    
  }

  switchToTransferSuccess(){
    this.current = 'successTransfer'
  }


  switchToDepositPage(){
    this.current = 'firstDeposit'
  }

  switchToDepositSuccess(){
    this.current = 'successDeposit'
  }

  switchToConfirmScheduling(){
    this.current = 'confirmScheduling'
  }

  switchToSchedulingSuccess(){
    this.current = 'successScheduling'
  }

  switchToSchedulingPage(){
    this.current = 'firstSchedule'
  }

  

}
