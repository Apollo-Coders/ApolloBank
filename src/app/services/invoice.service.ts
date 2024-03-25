import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private _baseUrl = 'https://localhost:7171/api/Invoice/';

  constructor(private http: HttpClient) {}

  payTotalMonthInvoice(): void {
    this.http
      .post(`${this._baseUrl}PayTotalMonthInvoice`, {})
      .pipe(
        catchError((error) => {
          throw 'Erro ao pagar fatura: ' + error;
        })
      )
      .subscribe(() => {});
  }

  payParcialMonthInvoice(cardNum: string): void {
    this.http
      .post(`${this._baseUrl}PayParcialMonthInvoice/${cardNum}`, {})
      .pipe(
        catchError((error) => {
          throw 'Erro ao pagar fatura: ' + error;
        })
      )
      .subscribe(() => {});
  }
}
