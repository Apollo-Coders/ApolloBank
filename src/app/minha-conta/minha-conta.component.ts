import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-minha-conta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minha-conta.component.html',
  styleUrl: './minha-conta.component.css'
})
export class MinhaContaComponent {
  user = 'Usuário';
  transacoes = [{
    tipo: "down",
    nome: "Compra no mercado",
    valor: "50.00"
  },
  {
    tipo: "down",
    nome: "Transferência para João",
    valor: "200.00"
  },
  {
    tipo: "up",
    nome: "Depósito em dinheiro",
    valor: "100.00"
  }
  ];

  changeViewSaldo() {
    var saldo = document.querySelector('.saldo input');
    var btnchange = document.querySelector('.saldo .bi');
    console.log(btnchange);

    var type = saldo?.getAttribute("type");
    if (type == "number") {
      type = "password";
      btnchange?.classList.replace("bi-eye-slash", "bi-eye");
    } else {
      type = "number";
      btnchange?.classList.replace("bi-eye", "bi-eye-slash");
    }
    saldo?.setAttribute("type", `${type}`);

  }
}
