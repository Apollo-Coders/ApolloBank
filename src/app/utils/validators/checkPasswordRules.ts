import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordRulesValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    if (!(formGroup instanceof FormGroup)) {
      return null;
    }

    const passwordControl = formGroup.get('password');
    const birthdayControl = formGroup.get('birthday');
    const cpfControl = formGroup.get('cpf');

    if (!passwordControl || !birthdayControl || !cpfControl) {
      return null;
    }

    const password = passwordControl.value;
    const birthday = birthdayControl.value;
    const cpf = cpfControl.value;

    if (!password || !birthday || !cpf) {
      return null;
    }


    const birthdayParts = birthday.split('-');
    if (birthdayParts.length === 3) {
      
      const ddmmyy = birthdayParts[2] + birthdayParts[1] + birthdayParts[0].slice(2);
      const ddmmyy2 = birthdayParts[2] + birthdayParts[1] + birthdayParts[0].slice(0,2);
     
      if (password.includes(ddmmyy) || password.includes(ddmmyy2) ){

        return { 'passwordContainsBirthday': true };
      }
    }

    const cpfSequences = cpf.match(/.{1,6}/g);
    if (cpfSequences && cpfSequences.some((sequence: string) => password.includes(sequence))) {
      
      return { 'passwordContainsCPF': true };
    }

   
    return null;
  };
}
