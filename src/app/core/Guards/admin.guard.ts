import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') == 'admin') {
    return true;
  } else {
    return false
  }

};
