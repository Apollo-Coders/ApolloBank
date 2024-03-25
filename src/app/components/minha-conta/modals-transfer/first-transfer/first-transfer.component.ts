import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../../../services/form.service';

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

  constructor (private formService: FormService) {

  }

  ngOnInit(){
    this.transferForm = new FormGroup({
      conta: new FormControl(''),
      valor: new FormControl(''),
      descricao: new FormControl('')

    })
  }

  onSubmit() {
    if (this.transferForm.valid) {
      const formValues = this.transferForm.value;
       this.formService.setFormData(formValues)
      this.transferForm.reset();
      this.formSubmitted.emit();
    }



}
}
