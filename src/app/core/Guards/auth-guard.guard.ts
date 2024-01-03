import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (state) => {
  const route = inject(Router);
  if (localStorage.getItem('userToken') !== null) {
    return true;
  } else {
    route.navigate(['auth'])
    return false
  }

};
