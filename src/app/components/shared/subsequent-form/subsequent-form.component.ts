import { CommonModule, Location } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormTypes } from '../register-form/form-types';
import { cepValidator } from '../../../utils/validators/checkCEP';
import { searchCepService } from '../../../services/search-cep.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import * as bootstrap from 'bootstrap';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { FormService } from '../../../services/form.service';
@Component({
  selector: 'app-subsequent-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './subsequent-form.component.html',
  styleUrl: './subsequent-form.component.css'
})
export class SubsequentFormComponent {
  formSubscription: Subscription | undefined;


  constructor(private formBuilder: FormBuilder, private cepService: searchCepService, private cdr: ChangeDetectorRef, private localStorageService: LocalStorageService, private router: Router, private formService: FormService) {

  }



  ufs: string[] = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']
  private modalOpened = false;

  form!: FormGroup;
  errorMessage: string | null = '';
  searchAttempted: boolean = false;
  @Output() formCompleted = new EventEmitter<void>();
  @Output() goBack = new EventEmitter<void>();
  goBackClicked() {
    this.goBack.emit();
  }

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

      this.formService.getFormData().pipe(take(1)).subscribe(data => {
        const completeUser = { ...data, ...cleanValues };

        const userExists = this.localStorageService.checkUserEmailExists(completeUser.email) || this.localStorageService.checkUserCPFExists(completeUser.cpf);
        if (!userExists) {
          this.localStorageService.saveUserLocalStorage(completeUser);
          this.formCompleted.emit(); 
          this.form.reset(); 
        } else {
          
          console.error('Usuário já existe.');
        }
      });
    }
  }



  ngOnInit() {
    this.form = this.formBuilder.group({
      cep: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(8), cepValidator()]),
      uf: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]),
      cidade: new FormControl('', [Validators.required]),
      logradouro: new FormControl('', [Validators.required]),
      complemento: new FormControl(''),
      bairro: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      policies: new FormControl(false, Validators.requiredTrue)
    });

    this.formSubscription = this.form.valueChanges.subscribe(values => {
      this.formService.setFormData(values);
    });
    this.formService.getFormData().subscribe(data => {
      if (data) {
        this.form.patchValue(data);
      }
    });


  }

  searchCEP() {

    this.searchAttempted = false;
    this.errorMessage = '';

    const cep = this.form.get('cep')?.value;
    if (cep && cep !== '') {
      this.searchAttempted = true;
      this.cepService.buscarCEP(cep).subscribe({
        next: (data) => {
          if (data.erro) {
            this.errorMessage = 'CEP não encontrado.';
          } else {
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

  @ViewChild('policiesModal') policiesModal!: ElementRef;
  @ViewChild('RejectPoliciesModal') rejectPoliciesModal!: ElementRef;

  openPoliciesModal() {
    if (this.form.get('policies')?.value !== false) {
      const Policiesmodal = new bootstrap.Modal(this.policiesModal.nativeElement);
      Policiesmodal.show();
    }
  }
  declinePoliciesModal() {
    const RejectModal = new bootstrap.Modal(this.rejectPoliciesModal.nativeElement);
    RejectModal.show();
    this.form.get('policies')?.setValue(false);
  }

}

