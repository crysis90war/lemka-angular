import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private client: HttpClient) {}

  private static formatErrors(error: any) {
    return throwError(() => error.error);
  }

  public getAll<TModel>(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<TModel[]> {
    return this.client.get<TModel[]>(`${API_URL}${path}`, { params });
  }

  public get(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.client
      .get(`${API_URL}${path}`, { params })
      .pipe(catchError(ApiService.formatErrors));
  }

  public put(path: string, body: Object = {}): Observable<any> {
    return this.client
      .put(`${API_URL}${path}`, JSON.stringify(body))
      .pipe(catchError(ApiService.formatErrors));
  }

  public post(path: string, body: Object = {}): Observable<any> {
    return this.client
      .post(`${API_URL}${path}`, JSON.stringify(body))
      .pipe(catchError(ApiService.formatErrors));
  }

  public delete(path: string): Observable<any> {
    return this.client
      .delete(`${API_URL}${path}`)
      .pipe(catchError(ApiService.formatErrors));
  }
}
