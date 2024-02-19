import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterTypes } from '../types/register-type';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }



  getRegisteredUsers(): any[] {
    const registeredUsers = localStorage.getItem('users');
    return registeredUsers ? JSON.parse(registeredUsers) : [];
  }
  getPassword(cpf: string): any {
    const user = this.usersList.find(user => user.cpf === cpf);
    return user.password;

  }

  private usersList = this.getRegisteredUsers();

  checkUserEmailExists(email: string): boolean {

    const userEmailExists = this.usersList.some(user => user.email === email);


    return userEmailExists;
  }
  checkUserCPFExists(cpf: number): boolean {

    const userCPFExists = this.usersList.some(user => user.cpf === cpf);


    return userCPFExists;
  }

  saveUserLocalStorage(User: RegisterTypes): void {

    this.usersList.push(User);
    localStorage.setItem('users', JSON.stringify(this.usersList));

  }

  saveLoggedUserLocalStorage(LoggedUser: any): void {
    localStorage.setItem('LoggedUser', JSON.stringify(LoggedUser));
  }

}
