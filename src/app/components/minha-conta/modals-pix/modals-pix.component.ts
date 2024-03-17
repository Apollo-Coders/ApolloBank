import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainPixComponent } from './main-pix/main-pix.component';
import { FirstTransferComponent } from '../modals-transfer/first-transfer/first-transfer.component';
import { SecondConfirmComponent } from '../modals-transfer/second-confirm/second-confirm.component';
import { ThirdSuccessComponent } from '../modals-transfer/third-success/third-success.component';

@Component({
  selector: 'app-modals-pix',
  standalone: true,
  imports: [CommonModule, MainPixComponent, FirstTransferComponent, SecondConfirmComponent, ThirdSuccessComponent],
  templateUrl: './modals-pix.component.html',
  styleUrl: './modals-pix.component.css'
})
export class ModalsPixComponent {

  current = 'main'

  

  controlSwitchPage(){
    switch(this.current){
      case 'main': this.current = 'firstTransfer';
      break
      case 'firstTransfer': this.current = 'secondTransfer';
      break
    }
    console.log('oi')

  }

  switchToFirstTransferPage(){
    this.current = 'firstTransfer'
   
  }

}
