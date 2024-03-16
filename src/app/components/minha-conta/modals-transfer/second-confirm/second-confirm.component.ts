import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-second-confirm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-confirm.component.html',
  styleUrl: './second-confirm.component.css'
})
export class SecondConfirmComponent {


  @Output() nextStep: EventEmitter<void> = new EventEmitter<void>();

  goToNextStep() {
    this.nextStep.emit();
  }

  @Output() goBack = new EventEmitter<void>();
  
  goBackClicked() {
    this.goBack.emit();
  }


}
