import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormsModule } from '@angular/forms';
interface IPairPasswordNums {
  fisrtNum: number;
  secondNum: number;
}
@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './password-form.component.html',
  styleUrl: './password-form.component.css'
})
export class PasswordFormComponent {



  title = 'testeLogin';
  //A senha correta para o login
  correctPassword = '123456';
  //Os numeros sortidos para mostrar nos botões (2 numeros por indice)
  pairPasswordNums: IPairPasswordNums[] = [];
  //A senha inserida pelo usuário ao clicar nos botões
  passwordInsert: IPairPasswordNums[] = [];
  //Uma mascara só para por no input enquanto passwordInsert vai sendo preenchido
  passwordMask: string = '';

  ngOnInit(): void {
    this.generateButtons();
  }

  //recebe o valor do botao e adiciona em passwordInsert
  addToPassword(pair: IPairPasswordNums) {
    this.passwordInsert.push(pair);
    this.passwordMask += '*';
  }

  //funcionalidade do botao de apagar
  deletePassword() {
    this.passwordInsert.pop();
    this.passwordMask = this.passwordMask.slice(0, -1);
  }

  //verifica se a senha está correta
  isPasswordCorrect() {
    let isCorrect = true;

    for (let i = 0; i < 6; i++) {
      const pair = this.passwordInsert[i];
      const passNumPos = parseInt(this.correctPassword[i]);
      if (pair.fisrtNum !== passNumPos && pair.secondNum !== passNumPos) {
        isCorrect = false;
        break;
      }
    }

    if (isCorrect) {
      alert('Senha correta!');
    } else {
      alert('Senha incorreta!');
    }
  }

  //gera os botões com valores aleatórios sempre
  generateButtons() {
    const nums = this.randomizeNums();

    for (let i = 0; i < 5; i++) {
      const fisrtSortNum = nums.pop() as number;
      const secondSortNum = nums.pop() as number;
      this.pairPasswordNums[i] = {
        fisrtNum: fisrtSortNum,
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


  // @Output() passwordMaskChanged: EventEmitter<string> = new EventEmitter<string>();

  // private _passwordMask: string = '';

  // get passwordMask(): string {
  //   return this._passwordMask;
  // }

  // set passwordMask(value: string) {
  //   this._passwordMask = value;
  //   this.passwordMaskChanged.emit(value);
  //}

  @Output() formCompleted = new EventEmitter<void>();


    onSubmit() {
      this.formCompleted.emit();
  }
}
