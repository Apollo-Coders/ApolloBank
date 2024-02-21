import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function birthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return null;
        }

        const inputDate = new Date(control.value);
        const currentDate = new Date();


        currentDate.setHours(0, 0, 0, 0);

        if (inputDate >= currentDate) {

            return { dateOfBirthInvalid: true };
        }
        if (inputDate.getFullYear() < 1900) {
            return { wrongYear: true };
        }
        if(inputDate.getFullYear() > 2024){
            return { futureYear: true };
        }
        if(inputDate.getMonth()>12){
            return { wrongMonth: true };
        }
        if(inputDate.getDate()>31){
            return { wrongDay: true };
        }
        if(inputDate.getMonth()===2 && inputDate.getDate()>29){
            return { wrongDay: true };
        }
        
        if(inputDate.getMonth()===4 && inputDate.getDate()>30){
            return { wrongDay: true };
        }
        if(inputDate.getMonth()===6 && inputDate.getDate()>30){
            return { wrongDay: true };
        }
        if(inputDate.getMonth()===9 && inputDate.getDate()>30){
            return { wrongDay: true };
        }
        if(inputDate.getMonth()===11 && inputDate.getDate()>30){
            return { wrongDay: true };
        }



        return null;
    };
}
