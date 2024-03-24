import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from '../models/Login';
import { UserLogged } from '../models/UserLogged';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {


private readonly baseUrl:string = 'https://localhost:7171/api/'


  constructor(private http: HttpClient, private router: Router) { }

   login(data: Login): Observable<UserLogged>{
     return this.http.post<UserLogged>(`${this.baseUrl}Auth/Authenticate`, data)
   }





}
