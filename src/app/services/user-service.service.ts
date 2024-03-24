import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCreateRequest } from '../models/UserCreateRequest';
import { Observable } from 'rxjs';
import { CreateUser } from '../models/CreateUser';
import { UserResponse } from '../models/UserResponse';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  private baseUrl:string = 'https://localhost:7171/api/User'; 



  constructor(private http:HttpClient) { }

  registerUser(obj:CreateUser):Observable<UserResponse>{
   return this.http.post<UserResponse>(`${this.baseUrl}/CreateUser`, obj)

  }



  


}
