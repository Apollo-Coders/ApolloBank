import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-third-success',
  standalone: true,
  imports: [],
  templateUrl: './third-success.component.html',
  styleUrl: './third-success.component.css'
})
export class ThirdSuccessComponent {

  @Output() repeatTransaction = new EventEmitter<void>();


  addTransaction(){
    this.repeatTransaction.emit();
  }

}
