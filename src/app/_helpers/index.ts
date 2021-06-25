import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { AuthInterceptor } from './auth.interceptor';
import { HttpErrorInterceptor } from './httperrorinterceptor.service';

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi:true
  }
];
