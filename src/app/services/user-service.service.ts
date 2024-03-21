import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCreateRequest } from '../models/UserCreateRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl:string = 'https://localhost:7171/'; 



  constructor(private http:HttpClient) { }




}
