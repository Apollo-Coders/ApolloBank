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
  

  @Output() formCompleted = new EventEmitter<void>();

  onSubmit() {
    if (this.form.valid) {
      const formValues: string = this.form.value;
     this.formService.setFormData(formValues)    
      this.form.reset();
      this.formCompleted.emit();
    }
  }



  ngOnInit() {
    this.form = this.fb.group({
      cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11),
         cpfValidator()
      ]),
    });
  }

}