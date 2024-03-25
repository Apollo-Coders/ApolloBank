import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { CreditCard } from '../models/CreditCard';
import { SetCardLimit } from '../models/SetCardLimit';

@Injectable({
  providedIn: 'root',
})
export class CreditCardsService {
  private _baseUrl = 'https://localhost:7171/api/CreditCard/';
  private _creditCardsSubject: BehaviorSubject<CreditCard[]> =
    new BehaviorSubject<CreditCard[]>([]);
  public creditCards$: Observable<CreditCard[]> =
    this._creditCardsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCreditCards();
  }

  private loadCreditCards(): void {
    this.http
      .get<{ $id: number; $values: CreditCard[] }>(
        `${this._baseUrl}GetAllCardByCardNumber`
      )
      .pipe(
        catchError((error) => {
          throw 'Erro ao obter cartões de crédito: ' + error;
        })
      )
      .subscribe((response) => {
        this._creditCardsSubject.next(response.$values);
      });
  }

  createCreditCard(): void {
    this.http
      .post<CreditCard>(`${this._baseUrl}CreateCreditCard`, {})
      .pipe(
        catchError((error) => {
          throw 'Erro ao criar cartão de crédito: ' + error;
        })
      )
      .subscribe((r) => {
        this.loadCreditCards();
      });
  }

  blockCreditCard(cardNum: string): void {
    this.http
      .put<void>(`${this._baseUrl}BlockCreditCard/${cardNum}`, {})
      .pipe(
        catchError((error) => {
          throw 'Erro ao bloquear cartão de crédito: ' + error;
        })
      )
      .subscribe((r) => {
        this.loadCreditCards();
      });
  }

  setCardLimit(setLimitData: SetCardLimit): void {
    this.http
      .put<void>(`${this._baseUrl}SetCardLimit`, setLimitData)
      .pipe(
        catchError((error) => {
          throw 'Erro ao definir limite do cartão: ' + error;
        })
      )
      .subscribe(() => {
        this.loadCreditCards();
      });
  }
}
