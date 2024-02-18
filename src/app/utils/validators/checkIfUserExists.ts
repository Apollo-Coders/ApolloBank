import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { LocalStorageService } from '../../services/local-storage.service';


export function userExistsValidator(localStorageService: LocalStorageService): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const email = control.get('email')?.value;
        const cpf = control.get('cpf')?.value;

        if (!email && !cpf) {
            return null;
        }

        const existEmail = email ? localStorageService.checkUserEmailExists(email) : false;
        if (existEmail) {
            return { userEmailExists: true };
        }
        const existCPF = cpf ? localStorageService.checkUserCPFExists(cpf) : false;
        if (existCPF) {
            return { userCPFExists: true };
        }

        return null;
    };
}