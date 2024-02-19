import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarContaComponent } from '../../shared/navbar-conta/navbar-conta.component';
import { RouterLink } from '@angular/router';
import {
  ILoggedUser,
  LocalStorageService,
} from '../../services/local-storage.service';

@Component({
  selector: 'app-minha-conta',
  standalone: true,
  imports: [CommonModule, NavbarContaComponent, RouterLink],
  templateUrl: './minha-conta.component.html',
  styleUrl: './minha-conta.component.css',
})
export class MinhaContaComponent {
  route = '/minha-conta';
  user!: ILoggedUser;

  constructor(private localstorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.user = this.localstorageService.getLoggedUser();
  }

  saldo: number = 100;
  fatura: number = 500;
  limite: number = 2000;
  transacoes = [
    {
      tipo: 'down',
      nome: 'Compra no mercado',
      valor: '50.00',
    },
    {
      tipo: 'down',
      nome: 'Transferência para João',
      valor: '200.00',
    },
    {
      tipo: 'up',
      nome: 'Depósito em dinheiro',
      valor: '100.00',
    },
  ];

  changeViewSaldo() {
    var saldo = document.querySelectorAll('.valor');
    var btnchange = document.querySelector('.saldo .bi');

    var type = saldo[0]?.getAttribute('type');
    //verifica se o tipo do input é number e troca pra password caso seja, trocando também o icone
    if (type == 'number') {
      type = 'password';
      btnchange?.classList.replace('bi-eye-slash', 'bi-eye');
    } else {
      type = 'number';
      btnchange?.classList.replace('bi-eye', 'bi-eye-slash');
    }
    saldo.forEach((s) => s.setAttribute('type', `${type}`));
  }

  getInputWidth(value: number): number {
    const decimalCount = value.toString().length;
    const baseWidth = 15;
    // Aumentar o tamanho do campo de entrada com base no número de casas decimais
    return baseWidth * decimalCount + 60;
  }
}
