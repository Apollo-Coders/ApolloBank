import { TransactionsService } from './../../services/transactions.service';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { NavbarContaComponent } from '../shared/navbar-conta/navbar-conta.component';
import { RouterLink } from '@angular/router';
import {
  ILoggedUser,
  LocalStorageService,
} from '../../services/local-storage.service';
import { Transaction } from '../../models/Transaction';
import { FirstTransferComponent } from './modals-transfer/first-transfer/first-transfer.component';
import { SecondConfirmComponent } from './modals-transfer/second-confirm/second-confirm.component';
import { ThirdSuccessComponent } from './modals-transfer/third-success/third-success.component';
import { ModalsTransferComponent } from './modals-transfer/modals-transfer.component';
import { FirstWithdrawComponent } from './modals-withdraw/first-withdraw/first-withdraw.component';
import { ModalsDepositComponent } from './modals-deposit/modals-deposit.component';
import { ModalsWithdrawComponent } from './modals-withdraw/modals-withdraw.component';
import { MainPixComponent } from './modals-pix/main-pix/main-pix.component';
import { ModalsPixComponent } from './modals-pix/modals-pix.component';
import { FirstScheduleComponent } from './modals-scheduling/first-schedule/first-schedule.component';
import { ConfirmSchedulingComponent } from './modals-scheduling/confirm-scheduling/confirm-scheduling.component';
import { SchedulingSuccessComponent } from './modals-scheduling/scheduling-success/scheduling-success.component';

@Component({
  selector: 'app-minha-conta',
  standalone: true,
  imports: [CommonModule, NavbarContaComponent, RouterLink, ModalsTransferComponent, ModalsWithdrawComponent, ModalsDepositComponent, ModalsPixComponent],
  templateUrl: './minha-conta.component.html',
  styleUrl: './minha-conta.component.css',
})
export class MinhaContaComponent {
  route = '/minha-conta';
  user!: ILoggedUser;

  lastTransactions: Transaction[] = [];

  constructor(
    private localstorageService: LocalStorageService,
    private transactionsService: TransactionsService
  ) {}

  ngOnInit(): void {
    this.user = this.localstorageService.getLoggedUser();
    this.transactionsService.setMockTransactions();
    this.transactionsService.transactions$.subscribe((tr) => {
      this.lastTransactions = tr.slice(0, 3);
    });
  }

  saldo: number = 100;
  fatura: number = 500;
  limite: number = 2000;

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


 



  @ViewChild('transferModel') transferModal!: ElementRef;
  



  openTransferModal() {
      const transferModal = new bootstrap.Modal(this.transferModal.nativeElement);
      transferModal.show();
  }
 




  @ViewChild('withdrawModel') withdrawModal!: ElementRef; 

  openWithDrawModal(){
    const withdrawModal = new bootstrap.Modal(this.withdrawModal.nativeElement);
    withdrawModal.show();
  }




  @ViewChild('depositModel') depositModal!: ElementRef; 

  openDepositModal(){
    const depositModal = new bootstrap.Modal(this.depositModal.nativeElement);
    depositModal.show();
  }


  @ViewChild('pixModel') pixModal!: ElementRef;

  openPixModal(){
    const pixModal = new bootstrap.Modal(this.pixModal.nativeElement);
    pixModal.show();
  }




}
