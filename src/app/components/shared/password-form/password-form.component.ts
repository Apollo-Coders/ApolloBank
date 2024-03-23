import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../../../services/form.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Subscription } from 'rxjs';
import { AuthenticationServiceService } from '../../../services/authentication-service.service';
import { Login, PasswordComboDTO } from '../../../models/Login';
interface IPairPasswordNums {
  fisrtNum: number;
  secondNum: number;
}
@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterLink],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.css'
})
export class PasswordFormComponent {
  constructor(private router: Router, private formService: FormService, private localStorageService: LocalStorageService, private AuthService: AuthenticationServiceService) { }

  form!: FormGroup;
  title = 'testeLogin';
  //A senha correta para o login
  correctPassword: any
  //Os numeros sortidos para mostrar nos botões (2 numeros por indice)
  pairPasswordNums: PasswordComboDTO[] = [];
  //A senha inserida pelo usuário ao clicar nos botões
  passwordInsert: PasswordComboDTO[] = [];
  //Uma mascara só para por no input enquanto passwordInsert vai sendo preenchido
  passwordMask: string = '';
  erroMessage: string = '';


  private formDataSubscription: Subscription = new Subscription();
  public formData: any;



  ngOnInit(): void {
    this.generateButtons();
   
  }

  //recebe o valor do botao e adiciona em passwordInsert
  addToPassword(pair: PasswordComboDTO) {
    if (this.passwordInsert.length < 6) { // Verifica se já foram inseridos menos de 6 caracteres
      this.passwordInsert.push(pair);
      this.passwordMask += '*';
      console.log('passwordInsert',this.passwordInsert)
    }
  }

  //funcionalidade do botao de apagar
  deletePassword() {
    this.passwordInsert.pop();
    this.passwordMask = this.passwordMask.slice(0, -1);
  }
  deleteEntirePassword() {
    this.passwordInsert = [];
    this.passwordMask = '';
  }

  //verifica se a senha está correta
  sendForm() {
    
    
      this.formService.getFormData().subscribe(formValues => {
        console.log('formvalue', formValues)
        const login:Login = {
          cpf: formValues.cpf,
          password: this.passwordInsert
        }
        this.AuthService.login(login).subscribe(userLogged => {
          this.localStorageService.saveLoggedUserLocalStorage(userLogged);
        this.router.navigate(['/minha-conta']);
        this.formService.clearFormData();
        })      
      });
    
  }

  //gera os botões com valores aleatórios sempre
  generateButtons() {
    const nums = this.randomizeNums();

    for (let i = 0; i < 5; i++) {
      const fisrtSortNum = nums.pop() as number;
      const secondSortNum = nums.pop() as number;
      this.pairPasswordNums[i] = {
        firstNum: fisrtSortNum,
        secondNum: secondSortNum,
      };
    }
  }

  //aleatoriza um array de numeros de 0 a 9, para facilitar a criação do pairPasswordNums
  private randomizeNums() {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = nums.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    return nums;
  }


}
