import { Router, type CanMatchFn } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const notAuthenticatedGuard: CanMatchFn =  async(route, segments) => {

    const authService = inject(AuthService);

    const router = inject(Router)

    const isAuthenticated = await firstValueFrom(authService.checkStatus())

    if(isAuthenticated){
      router.navigateByUrl("/")
      return false
    }


  return true;
};
