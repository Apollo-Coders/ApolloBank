import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scheduling-success',
  standalone: true,
  imports: [],
  templateUrl: './scheduling-success.component.html',
  styleUrl: './scheduling-success.component.css'
})
export class SchedulingSuccessComponent {

@Output() backToMain = new EventEmitter<void>();

goBack(){
  this.backToMain.emit();
}

}
