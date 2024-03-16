import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-deposit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './first-deposit.component.html',
  styleUrl: './first-deposit.component.css'
})
export class FirstDepositComponent {

  depositForm!: FormGroup;

  @Output() formSubmittedThree = new EventEmitter<void>();

  

  ngOnInit(){
    this.depositForm = new FormGroup({
      valor: new FormControl('')
      

    })
  }

  onSubmit() {
    if (this.depositForm.valid) {
      this.depositForm.reset();
      this.formSubmittedThree.emit();
    }


}


}
