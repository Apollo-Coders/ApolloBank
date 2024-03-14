import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormComponent } from './register-form.component';
import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormComponent, ReactiveFormsModule, FormsModule],
      providers: [FormGroupDirective]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show an error if form is empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should test name validation', () => {
    let name = component.form.controls['name'];
    expect(name.valid).toBeFalsy();
    name.setValue("Teste Nome");
    expect(name.valid).toBeTruthy();
  });

  // it('should show an error if name is empty', () => {
  //   let errors: any = {};
  //   let name = component.form.controls['name'];
  //   errors = name.errors || {};
  //   expect(errors['required']).toBeTruthy();

  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector("form.get('name')?.errors?.['reason'] === 'Not enough words'")).toContain('Por favor, informe seu nome e sobrenome.');
  // });

  it('should validate name field as required', () => {
    let name = component.form.controls['name'];
    expect(name.valid).toBeFalsy();


    name.setValue('');
    expect(name.hasError('required')).toBeTruthy();


    name.setValue('Nome Teste');
    expect(name.hasError('required')).toBeFalsy();
    expect(name.valid).toBeTruthy();
  });

  it('should enforce minimum length for name field', () => {
    let name = component.form.controls['name'];


    name.setValue('a');
    expect(name.hasError('minlength')).toBeTruthy();


    name.setValue('Nome Válido');
    expect(name.hasError('minlength')).toBeFalsy();
  });

  it('should not allow numbers in the name field', () => {
    const nameControl = component.form.controls['name'];

    nameControl.setValue('12345');
    expect(nameControl.errors).toBeTruthy();

    nameControl.setValue('Valid Name');
    expect(nameControl.errors).toBeNull();
  });

  it('should show an error if email is empty', () => {
    let errors: any = {};
    let email = component.form.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should validate email field as required', () => {
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();

    email.setValue('test');
    expect(email.hasError('email')).toBeTruthy();


    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();

    email.setValue('test@example.com');
    expect(email.hasError('email')).toBeFalsy();
  });



  it('should only submit valid form', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['name'].setValue("Daiane Bolzan");
    component.form.controls['email'].setValue("dai@gmail.com");
    component.form.controls['password'].setValue("123456");
    component.form.controls['confirmPassword'].setValue("123456");
    component.form.controls['birthday'].setValue('1985-09-19');
    component.form.controls['ddd'].setValue("11");
    component.form.controls['phone'].setValue("999999999");
    component.form.controls['cpf'].setValue("80647022087");

    fixture.detectChanges();

    expect(component.form.valid).toBeTruthy();


    spyOn(component, 'onSubmit').and.callThrough();
    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should not submit invalid form', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['name'].setValue("Daiane Bolzan");
  });



  it('should require DDD selection', () => {

    let ddd = component.form.controls['ddd'];
    expect(ddd.valid).toBeFalsy();

    ddd.setValue('');
    expect(ddd.hasError('required')).toBeTruthy();

    ddd.setValue('11');
    expect(ddd.hasError('required')).toBeFalsy();
  });

  it('should validate DDD is among the provided options', () => {
    let ddd = component.form.controls['ddd'];

    ddd.setValue(55);
    expect(component.ddds.includes(ddd.value)).toBeTrue();

    ddd.setValue(123);
    expect(component.ddds.includes(ddd.value)).toBeFalse();
  });

  it('should show an error message if DDD is not selected and touched', () => {
    let ddd = component.form.controls['ddd'];
    ddd.markAsTouched();

    fixture.detectChanges();

    const dddErrorMsg = fixture.debugElement.query(By.css('.invalid-feedback')).nativeElement;
    expect(dddErrorMsg.textContent).toContain('Por favor, selecione um DDD.');
  });

  it('should require phone number', () => {
    let phone = component.form.controls['phone'];
    expect(phone.valid).toBeFalsy();

    phone.setValue('');
    expect(phone.hasError('required')).toBeTruthy();

    phone.setValue('999999999');
    expect(phone.hasError('required')).toBeFalsy();
  });

  it('should validate phone number length', () => {
    let phone = component.form.controls['phone'];

    phone.setValue('123456');
    expect(phone.hasError('minlength')).toBeTruthy();
  });

  it('should only allow numbers in the phone number', () => {
    const phoneControl = component.form.controls['phone'];

    phoneControl.setValue('12345');
    expect(phoneControl.errors).toBeTruthy();

    phoneControl.setValue('aaaa');
    expect(phoneControl.errors).toBeTruthy();

    phoneControl.setValue('999189314');
    expect(phoneControl.errors).toBeNull();
  });

  it('should require CPF', () => {
    let cpf = component.form.controls['cpf'];
    expect(cpf.valid).toBeFalsy();

    cpf.setValue('');
    expect(cpf.hasError('required')).toBeTruthy();

    cpf.setValue('80647022087');
    expect(cpf.hasError('required')).toBeFalsy();
  });

  it('should validate CPF length', () => {
    let cpf = component.form.controls['cpf'];

    cpf.setValue('123456');
    expect(cpf.hasError('minlength')).toBeTruthy();
  });

  it('should only allow numbers in the CPF', () => {
    const cpfControl = component.form.controls['cpf'];

    cpfControl.setValue('12345');
    expect(cpfControl.errors).toBeTruthy();

    cpfControl.setValue('aaaa');
    expect(cpfControl.errors).toBeTruthy();

    cpfControl.setValue('80647022087');
    expect(cpfControl.errors).toBeNull();
  });

  it('should show an error message if CPF is not valid', () => {
    let cpf = component.form.controls['cpf'];
    cpf.setValue('12345678901');
    expect(cpf.errors).toBeTruthy();
  });

  it('should have a valida birthdate', () => {
    let birthday = component.form.controls['birthday'];
    expect(birthday.valid).toBeFalsy();

    birthday.setValue('1985-09-19');
    expect(birthday.valid).toBeTruthy();
  });

  it('should show an error message if birthdate is not valid', () => {
    let birthday = component.form.controls['birthday'];
    birthday.setValue('2029-09-19');
    expect(birthday.errors).toBeTruthy();

    birthday.setValue('1880-09-19');
    expect(birthday.errors).toBeTruthy();

    birthday.setValue('1985-09-19');
    expect(birthday.errors).toBeNull();

  });

  it('should require password', () => {
    let password = component.form.controls['password'];
    expect(password.valid).toBeFalsy();

    password.setValue('');
    expect(password.hasError('required')).toBeTruthy();

    password.setValue('123456');
    expect(password.hasError('required')).toBeFalsy();
  });

  it('should validate password length', () => {
    let password = component.form.controls['password'];

    password.setValue('12345');
    expect(password.hasError('minlength')).toBeTruthy();

    password.setValue('12');
    expect(password.hasError('minlength')).toBeTruthy();
  });

  it('should require password confirmation', () => {
    let confirmPassword = component.form.controls['confirmPassword'];
    expect(confirmPassword.valid).toBeFalsy();

    confirmPassword.setValue('');
    expect(confirmPassword.hasError('required')).toBeTruthy();

    confirmPassword.setValue('123456');
    expect(confirmPassword.hasError('required')).toBeFalsy();
  });

  it('should validate password confirmation', () => {
    let password = component.form.controls['password'];
    let confirmPassword = component.form.controls['confirmPassword'];

    password.setValue('123456');
    confirmPassword.setValue('123456');
    expect(confirmPassword.valid).toBeTruthy();

  });
 
  it('should validate password confirmation', () => {
    let password = component.form.controls['password'];
    let confirmPassword = component.form.controls['confirmPassword'];

    
    password.setValue('123456');
    confirmPassword.setValue('123456');
    expect(component.form.errors?.['passwordMismatch']).toBeFalsy(); 
    
    password.setValue('123456');
    confirmPassword.setValue('456123');
    expect(component.form.errors?.['passwordMismatch']).toBeTruthy(); 
});

});