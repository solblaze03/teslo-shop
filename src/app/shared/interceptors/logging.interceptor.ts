import { HttpEventType, type HttpInterceptorFn, type HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap((event) => {
      if(event.type === HttpEventType.Response){
        console.log(req.url)
      }
    })
  );
};
