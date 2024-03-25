import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-success-deposit',
  standalone: true,
  imports: [],
  templateUrl: './success-deposit.component.html',
  styleUrl: './success-deposit.component.css'
})
export class SuccessDepositComponent {

@Output() goingBack = new EventEmitter<void>(); 

backToMain(){
  this.goingBack.emit();
}

}
