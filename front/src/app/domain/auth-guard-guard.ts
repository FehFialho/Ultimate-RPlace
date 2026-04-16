import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authGuardGuard: CanMatchFn = (route, segments) => {

  const router = inject(Router)

  const token = sessionStorage.getItem('token') ?? "";
  const logged = "" !== token;

  if(!sessionStorage.getItem('token'))
    router.navigate(["login"])
    return false;
  return true;
};
