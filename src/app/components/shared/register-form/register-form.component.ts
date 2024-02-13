import { CommonModule, FormStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { nameValidator } from '../../../utils/validators/checkName';
import { FormTypes } from './form-types';
import { phoneValidator } from '../../../utils/validators/checkPhone';
import { cpfValidator } from '../../../utils/validators/checkCPF';
import { birthValidator } from '../../../utils/validators/checkBirthday';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }
  ddds: number[] = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];


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
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100), nameValidator()]),
      ddd: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), phoneValidator()]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), cpfValidator()]),
      birthday: new FormControl('', [Validators.required, birthValidator()]),
      policies: new FormControl(false, Validators.requiredTrue)
    });
  }


}
