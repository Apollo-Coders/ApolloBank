import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  ILoggedUser,
  LocalStorageService,
} from '../../../services/local-storage.service';

@Component({
  selector: 'app-navbar-conta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar-conta.component.html',
  styleUrl: './navbar-conta.component.css',
})
export class NavbarContaComponent implements OnInit {
  saldo: number = 100;
  user!: ILoggedUser;

  constructor(
    private localstorageService: LocalStorageService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.user = this.localstorageService.getLoggedUser();
  }

  logout(): void {
    this.localstorageService.logout();
    this.route.navigate(['/login']);
  }

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
