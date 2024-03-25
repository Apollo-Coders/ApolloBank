import { LocalStorageService } from './../../../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { FormService } from '../../../../services/form.service';
import { UserLogged } from '../../../../models/UserLogged';

@Component({
  selector: 'app-first-transfer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './first-transfer.component.html',
  styleUrl: './first-transfer.component.css',
})
export class FirstTransferComponent {
  transferForm!: FormGroup;
  user!: UserLogged;

  @Output() formSubmitted = new EventEmitter<void>();

  constructor(
    private formService: FormService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.transferForm = new FormGroup({
      conta: new FormControl(''),
      valor: new FormControl(''),
      descricao: new FormControl(''),
    });

    this.user = this.localStorageService.getLoggedUser();
  }

  onSubmit() {
    if (this.transferForm.valid) {
      const formValues = this.transferForm.value;
      this.formService.setFormData(formValues);
      this.transferForm.reset();
      this.formSubmitted.emit();
    }
  }
}
