import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-scheduling',
  standalone: true,
  imports: [],
  templateUrl: './confirm-scheduling.component.html',
  styleUrl: './confirm-scheduling.component.css'
})
export class ConfirmSchedulingComponent {


@Output() goToSuccess = new EventEmitter<void>(); 
@Output() goingBack = new EventEmitter<void>(); 

goToSuccessStep(){
  this.goToSuccess.emit();
}

goBack(){
  this.goingBack.emit();
}


}
