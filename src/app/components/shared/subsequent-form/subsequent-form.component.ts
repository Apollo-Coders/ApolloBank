import { CommonModule, FormStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { nameValidator } from '../../../utils/validators/checkName';
import { SubsequentFormType } from './subsequent-form-types';
import { phoneValidator } from '../../../utils/validators/checkPhone';
import { cpfValidator } from '../../../utils/validators/checkCPF';
import { birthValidator } from '../../../utils/validators/checkBirthday';
import { FormTypes } from '../register-form/form-types';

@Component({
  selector: 'app-subsequent-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './subsequent-form.component.html',
  styleUrl: './subsequent-form.component.css'
})
export class SubsequentFormComponent {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  uf: string[] = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']

  private trimFormValues(formValues: FormTypes): FormTypes {
    const trimmedValues: any = {};
    (Object.keys(formValues) as Array<keyof FormTypes>).forEach(key => {
      const value = formValues[key];
      if (typeof value === 'string') {
        trimmedValues[key] = value.trim();
      } else {

        trimmedValues[key] = value;
      }
    });

    return trimmedValues as FormTypes;
  }

  onSubmit() {
    if (this.form.valid) {
      const formValues: FormTypes = this.form.value;
      const cleanValues = this.trimFormValues(formValues);
      console.log('Form Data: ', cleanValues);

    }
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      uf: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2), nameValidator()]),
      localidade: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      logradouro: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), phoneValidator()]),
      complemento: new FormControl('', [Validators.required, Validators.email]),
      bairro: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), cpfValidator()]),
      senha: new FormControl('', [Validators.required]),
    });
  }


}
