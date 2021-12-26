import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IServiceModel} from "../../models";
import {catchError, retry} from "rxjs/operators";
import {CustomHelpers} from "../../handlers/custom-helpers";
import {environment} from "../../../../environments/environment";

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _client: HttpClient) {
  }

  public getAll(): Observable<IServiceModel[]> {
    let url: string = API_URL + 'Services';
    return this._client.get<IServiceModel[]>(url).pipe(retry(0), catchError(CustomHelpers.handleError));
  }

  public getById(id: number): Observable<IServiceModel> {
    let url: string = API_URL + 'Services/' + id;
    return this._client.get<IServiceModel>(url).pipe(retry(0), catchError(CustomHelpers.handleError));
  }
}
