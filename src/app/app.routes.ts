import { Routes } from '@angular/router';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MinhaContaComponent } from './components/minha-conta/minha-conta.component';
import { TransactionHistoryPageComponent } from './components/transaction-history-page/transaction-history-page.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard], //Apenas essas rotas tem Guard
    children: [
      {
        path: 'minha-conta',
        component: MinhaContaComponent,
      },
      {
        path: 'transactions',
        component: TransactionHistoryPageComponent,
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginUserComponent,
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/register-page/register-page.component').then(
        (m) => m.RegisterPageComponent
      ),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
