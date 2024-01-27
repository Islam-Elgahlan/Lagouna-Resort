import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';

export const favoritesGuard: CanActivateFn = ( state) => {
  const route = inject(Router);
  if (localStorage.getItem('userToken') !== null ) {
    return true;
  } else {
    route.navigate(['notFound'])
    return false
  }}
