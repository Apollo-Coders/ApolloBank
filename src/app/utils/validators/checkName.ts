import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = (control.value || '').trim();
    const words = value.split(' ').filter(Boolean);
    if (words.length < 2) {
      return { 'nameInvalid': true, 'reason': 'Not enough words' };
    }
    for (let word of words) {
      if (word.length < 3) {
        return { 'nameInvalid': true, 'reason': 'Word too short' };
      }
    }

    return null;
  };
}