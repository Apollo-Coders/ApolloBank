import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordRulesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const birthday = control.get('birthday')?.value;
    const cpf = control.get('cpf')?.value;

    if (!password || !birthday || !cpf) {
      return null;
    }


    const birthdayParts = birthday.split('-');
    if (birthdayParts.length === 3) {
      const ddmmyy = birthdayParts[2] + birthdayParts[1] + birthdayParts[0].slice(2);
      const ddmmyy2 = birthdayParts[2] + birthdayParts[1] + birthdayParts[0].slice(0, 2);


      if (password === ddmmyy || password === ddmmyy2 || password === cpf) {

        return { passwordEqualsBirthday: true };
      }
    }


    const cpfSequences = cpf.match(/.{1,6}/g);
    if (cpfSequences && cpfSequences.some((sequence: string) => password.includes(sequence))) {

      return { passwordEqualsCPF: true };
    }

    return null;
  };
}
