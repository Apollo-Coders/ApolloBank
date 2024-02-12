import { Routes } from '@angular/router';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';

export const routes: Routes = [
    { path: '', redirectTo: 'minha-conta', pathMatch: 'full' },
    { path: 'minha-conta', component: MinhaContaComponent },
    { path: '**', redirectTo: 'minha-conta' }
];
