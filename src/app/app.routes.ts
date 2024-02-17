import { Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { LoginPasswordComponent } from './components/login-password/login-password.component';


export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'Login', component: LoginUserComponent },
  { path: 'Password', component: LoginPasswordComponent },
  
];
