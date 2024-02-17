import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  saveFirstForm(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  retrieveInitialFormRegister(key: string): any {
    const valueInitialForm = localStorage.getItem(key);
    return valueInitialForm ? JSON.parse(valueInitialForm) : null;

  }

  getRegisteredUsers(): any[] {
    const registeredUsers = localStorage.getItem('users');
    return registeredUsers ? JSON.parse(registeredUsers) : [];
  }

  saveUserLocalStorage(newUser: string, valueUser: any): void {

    const usersList = this.getRegisteredUsers() || [];
    const hasDuplication = usersList.some(user => user && user.value && (user.value.email === valueUser.email || user.value.cpf === valueUser.cpf));
    if (!hasDuplication) {
      usersList.push({ newUser, valueUser });
      localStorage.setItem('users', JSON.stringify(usersList));
      this.clearFirstFormKey("firstForm");
    } else {
      throw new Error('There is already a user with their CPF or email registered.')
    }

  }

  clearFirstFormKey(key: string): void {
    localStorage.removeItem(key);
  }
}
