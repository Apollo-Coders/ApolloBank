import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCreateRequest } from '../models/UserCreateRequest';
import { Observable } from 'rxjs';
import { CreateUser } from '../models/CreateUser';
import { UserResponse } from '../models/UserResponse';
import { Account } from '../models/Account';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl:string = 'https://localhost:7171/api/User'; 
  
  



  constructor(private http:HttpClient) { }

  registerUser(obj:CreateUser):Observable<UserResponse>{
   return this.http.post<UserResponse>(`${this.baseUrl}/CreateUser`, obj)

  }

  getAccount(id:number):Observable<Account>{
    return this.http.get<Account>(`${this.baseUrl}/GetAccountInformation/GetAccount/${id}`)
  }


  


}
