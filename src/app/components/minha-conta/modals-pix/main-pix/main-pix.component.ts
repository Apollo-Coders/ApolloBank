import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-pix',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-pix.component.html',
  styleUrl: './main-pix.component.css'
})
export class MainPixComponent {


@Output() goToTransfer = new EventEmitter<void>(); 
@Output() goToDeposit = new EventEmitter<void>(); 
@Output() goToScheduling = new EventEmitter<void>();

onTransfer(){
  this.goToTransfer.emit();
}

onDeposit(){
  this.goToDeposit.emit();
}

onScheduling(){
  this.goToScheduling.emit();
}

  


}
