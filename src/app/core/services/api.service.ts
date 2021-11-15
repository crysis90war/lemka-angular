import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpHeaders, HttpClient, HttpParams} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

import {catchError} from "rxjs/operators";
import {JwtService} from "./jwt.service";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private client: HttpClient, private service: JwtService) {
  }

  private static formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.client.get(`${environment.api_url}${path}`, {params})
      .pipe(catchError(ApiService.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.client.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(ApiService.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.client.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(ApiService.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.client.delete(
      `${environment.api_url}${path}`
    ).pipe(catchError(ApiService.formatErrors));
  }
}
