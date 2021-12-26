import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {CustomHelpers} from "../../handlers/custom-helpers";
import {environment} from "../../../../environments/environment";
import {ProduitModel} from "../../models/produit.model";

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private _client: HttpClient) {
  }

  public getAllArticles(search: string | null = null): Observable<ProduitModel[]> {
    let url: string = this._url();
    if (search !== null) url += '?search=' + search;
    return this._client.get<any[]>(url).pipe(retry(0), catchError(CustomHelpers.handleError));
  }

  public getArticleById(id: number): Observable<any> {
    let url: string = this._url([id]);
    return this._client.get(url).pipe(retry(0), catchError(CustomHelpers.handleError));
  }

  private _url(ressources: any[] = []): string {
    let baseUrl: string = `${API_URL}Produits`;
    if (ressources.length > 0) {
      for (let i = 0; i < ressources.length; i++) {
        baseUrl += `/${ressources[i]}`;
      }
    }
    return baseUrl;
  }
}
