import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services';

const TOKEN_HEADER_KEY = 'Authorization';
const CONTENT_TYPE = 'Content-Type';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private _token: TokenStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = request;
    const token = this._token.getToken();

    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    authReq = request.clone({ setHeaders: headersConfig });

    if (token != null)
      authReq = request.clone({
        headers: request.headers.set(TOKEN_HEADER_KEY, `Bearer ${token}`),
      });

    return next.handle(authReq);
  }
}
