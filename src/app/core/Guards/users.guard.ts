import { CanActivateFn } from '@angular/router';

export const usersGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') == 'user') {
    return true;

  } else {
    return false
  }
};
