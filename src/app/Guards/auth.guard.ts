import { inject } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService: LocalStorageService = inject(LocalStorageService);
  const loggedUser = localStorageService.getLoggedUser();

  if (loggedUser) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
