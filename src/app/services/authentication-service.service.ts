import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {


private readonly baseUrl:string = 'https://localhost:7171/api/'


  constructor(private http: HttpClient, private router: Router) { }

  login(data: any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/auth/login`, data)
  }


}
