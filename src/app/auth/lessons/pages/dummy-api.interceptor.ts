import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export const dummyApiInterceptor: HttpInterceptorFn = (req, next) => {
  
 if (req.url === '/api/test') {
return of(new HttpResponse({
  status: 200,
  body: [
            {
              name: 'hk',
              place: 'universe',
            },
            {
              name: 'hk',
              place: 'universe',
            },
          ]
}));
  }
  
  return next(req);
};
