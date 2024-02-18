import { CommonModule, FormStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { cpfValidator } from '../../../utils/validators/checkCPF';
import { FormService } from '../../../services/form.service';
import { LocalStorageService } from '../../../services/local-storage.service';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [NgbCollapseModule,ReactiveFormsModule, CommonModule ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})



export class LoginFormComponent {
  isCollapsed = true;
  
  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService, private formService: FormService) { }



  form!: FormGroup;
  errorMessage: string | null = '';
  private trimFormValues(formValues: string): string {
    const trimmedValues: any = {};

    (Object.keys(formValues) as Array<keyof string>).forEach(key => {
      const value = formValues[key];
      if (typeof value === 'string') {
        trimmedValues[key] = value.trim();
      } else {

        trimmedValues[key] = value;
      }
    });

    return trimmedValues as string;
  }



  @Output() formCompleted = new EventEmitter<void>();

  onSubmit() {
    if (this.form.valid) {
      const formValues: string = this.form.value;
      const cleanValues = this.trimFormValues(formValues);
     
     
     
     
      console.log('Form Data: ', cleanValues);
      this.form.reset();
      this.formCompleted.emit();
    }
  }


  checkUserCPFExistsValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const cpf = control.value;
      const cpfAsNumber = Number(cpf);
      if (!cpf) {
        return null;
    }
    
      const userDoesNotExist = cpf ? !this.localStorageService.checkUserCPFExists(cpf) : true;
      if (userDoesNotExist) {
        return {cpfInvalid: 'DoesNotExist' };
      }

      return null;
    };
  }

  ngOnInit() {
    this.form = this.fb.group({
      cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11), this.checkUserCPFExistsValidator(),
         cpfValidator()
      ]),
    });
  }

}