import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },

    {
        path: 'register',
        loadComponent: () => import('./components/register-page/register-page.component').then(m => m.RegisterPageComponent)
    },
    {
        path: 'not-found',
        loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent)
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];



