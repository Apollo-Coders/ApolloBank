import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-withdraw',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './first-withdraw.component.html',
  styleUrl: './first-withdraw.component.css'
})
export class FirstWithdrawComponent {

  withdrawForm!: FormGroup;

  @Output() formSubmittedTwo = new EventEmitter<void>();

  

  ngOnInit(){
    this.withdrawForm = new FormGroup({
      valor: new FormControl('')
      

    })
  }

  onSubmit() {
    if (this.withdrawForm.valid) {
      this.withdrawForm.reset();
      this.formSubmittedTwo.emit();
    }


}

}
