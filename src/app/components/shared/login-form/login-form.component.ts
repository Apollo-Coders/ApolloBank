import { CommonModule, FormStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [NgbCollapseModule,ReactiveFormsModule, CommonModule ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})



export class LoginFormComponent {
  isCollapsed = true;
  
  constructor(private fb: FormBuilder) { }
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
      // localStorage.getItem('users.cpf');
      console.log('Form Data: ', cleanValues);
      this.form.reset();
      this.formCompleted.emit();
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern("^[0-9]*$") // Esta expressão regular permite apenas números
      ])
    });
  }

}