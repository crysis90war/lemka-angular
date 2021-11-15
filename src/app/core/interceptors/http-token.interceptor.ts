import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JwtService} from "../services";



@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(private service: JwtService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': ''
    };

    const token = this.service.getToken();

    if (token) headersConfig['Authorization'] = `Bearer ${token}`;

    const req = request.clone({setHeaders: headersConfig})

    return next.handle(req);
  }
}
