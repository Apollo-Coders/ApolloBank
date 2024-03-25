import { Component } from '@angular/core';
import { RegisterFormComponent } from '../shared/register-form/register-form.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

import { SubsequentFormComponent } from "../shared/subsequent-form/subsequent-form.component";
import { CommonModule } from '@angular/common';
import { RegisterSucessComponent } from "../shared/register-sucess/register-sucess.component";


@Component({
    selector: 'app-register-page',
    standalone: true,
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.css',
    imports: [RegisterFormComponent, NavbarComponent, SubsequentFormComponent, CommonModule, RegisterSucessComponent]
})
export class RegisterPageComponent {
 
  navbarButton = 'Acesse sua conta';
  route = "/login"
  currentForm = 'register';
  switchToSubsequentForm() {
    this.currentForm = 'subsequent';
  }
  switchToSuccess(){
    
    this.currentForm = 'success';
  }
  switchToFirst(){
    this.currentForm = 'register';
  }
}
