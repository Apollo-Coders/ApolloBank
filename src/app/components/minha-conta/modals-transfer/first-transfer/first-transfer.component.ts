import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-transfer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './first-transfer.component.html',
  styleUrl: './first-transfer.component.css'
})
export class FirstTransferComponent {

  transferForm!: FormGroup;

  @Output() formSubmitted = new EventEmitter<void>();

  ngOnInit(){
    this.transferForm = new FormGroup({
      conta: new FormControl(''),
      valor: new FormControl(''),
      descricao: new FormControl('')

    })
  }

  onSubmit() {
    if (this.transferForm.valid) {
      this.transferForm.reset();
      this.formSubmitted.emit();
    }


}
}


