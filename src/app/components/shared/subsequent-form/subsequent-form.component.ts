import { CommonModule, FormStyle } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormTypes } from '../register-form/form-types';
import { cepValidator } from '../../../utils/validators/checkCEP';
import { searchCepService } from '../../../services/search-cep.service';
import { nameValidator } from '../../../utils/validators/checkName';

@Component({
  selector: 'app-subsequent-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './subsequent-form.component.html',
  styleUrl: './subsequent-form.component.css'
})
export class SubsequentFormComponent {


  constructor(private formBuilder: FormBuilder, private cepService: searchCepService, private cdr: ChangeDetectorRef) { }

  ufs: string[] = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']

  form!: FormGroup;
  errorMessage: string | null = null;
  searchAttempted: boolean = false;


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
      cep: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), cepValidator()]),
      uf: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]),
      cidade: new FormControl('', [Validators.required]),
      logradouro: new FormControl('', [Validators.required]),
      complemento: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      policies: new FormControl('', [Validators.required, Validators.requiredTrue]),
    });
  }
  searchCEP() {

    this.searchAttempted = false;
    this.errorMessage = null;

    const cep = this.form.get('cep')?.value;
    if (cep && cep !== '') {
      this.searchAttempted = true;
      this.cepService.buscarCEP(cep).subscribe({
        next: (data) => {
          if (data.erro) {
            console.log(data.erro);

            this.errorMessage = 'CEP não encontrado.';
          } else {
            console.log(data);
            this.form.patchValue({
              uf: data.uf,
              cidade: data.localidade,
              logradouro: data.logradouro,
              bairro: data.bairro,
            });
          }
          this.cdr.detectChanges();
        },
        error: () => {

          this.errorMessage = 'Erro ao buscar o CEP. Por favor, tente novamente.';
          this.cdr.detectChanges();
        }
      });
    } else {

      this.errorMessage = 'Formato de CEP inválido.';
      this.searchAttempted = true;
    }
  }
}

