import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { nameValidator } from '../../../utils/validators/checkName';
import { FormTypes } from './form-types';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  onSubmit() {
    if (this.form.valid) {

      const trimmedValues: FormTypes = Object.keys(this.form.value).reduce((acc: FormTypes, key: string) => {
        const value: any = this.form.value[key as keyof FormTypes] as string | null;

        acc[key as keyof FormTypes] = typeof value === 'string' ? value.trim() : value;
        return acc;
      }, {} as FormTypes);

      console.log('Dados do Formulário Ajustados: ', trimmedValues);

    }
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(100), nameValidator()]),
    phone: new FormControl('', [Validators.required, Validators.minLength(11)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    birthday: new FormControl('', [Validators.required]),
    policies: new FormControl(false, Validators.requiredTrue)
  });


}
