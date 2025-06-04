import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = inject(AuthService).token()

  const newReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${token}`)
  })

  return next(req);
};
