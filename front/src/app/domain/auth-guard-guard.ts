import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authGuardGuard: CanMatchFn = (route, segments) => {

  const router = inject(Router)

  if(!sessionStorage.getItem('token'))
    router.navigate(["login"])
    return false;
  return true;
};
