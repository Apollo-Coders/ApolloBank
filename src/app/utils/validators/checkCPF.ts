import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cpf = control.value;
    
    if (!cpf) {
      return null;
    }
    
    if (!cpf || cpf.length !== 11) {
      return { cpfInvalid: 'invalidLength' };
    }

    const justNumberRegex = /^\d+$/;
    if (!justNumberRegex.test(cpf)) {
      return { cpfInvalid: 'notNumber' };
    }

    const cpfNumbers = cpf.match(/\d/g);
    if (cpfNumbers && cpfNumbers.length === 11) {
      const cpfStr = cpfNumbers.join('');

      if (isAllDigitsEqual(cpfStr)) {
        return { cpfInvalid: 'allDigitsEqual' };
      }

      if (!isValidCPF(cpf)) {
        return { cpfInvalid: true };
      }
    }

    return null;
  }
}

function isAllDigitsEqual(cpf: string): boolean {
  return cpf.split('').every((c) => c === cpf[0]);
}

function isValidCPF(cpf: string): boolean {
  for (let t = 9; t < 11; t++) {
    let d = 0;
    for (let c = 0; c < t; c++) {
      d += parseInt(cpf[c], 10) * (t + 1 - c);
    }
    d = (10 * d) % 11;
    if (d === 10 || d === 11) d = 0;
    if (d !== parseInt(cpf[t], 10)) return false;
  }
  return true;
}
