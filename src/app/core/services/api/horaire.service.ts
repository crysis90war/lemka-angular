import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IHoraireModel } from 'src/app/core/models/ihoraire-model';
import { environment } from 'src/environments/environment';
import { ApiService } from './index';

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root',
})
export class HoraireService {
  constructor(private _apiService: ApiService, private _client: HttpClient) {}

  private dataStore: { horaires: IHoraireModel[] } = { horaires: [] };
  private _horaires: BehaviorSubject<IHoraireModel[]> = new BehaviorSubject<
    IHoraireModel[]
  >([]);
  readonly horaires = this._horaires.asObservable();

  public getAll(): Observable<IHoraireModel[]> {
    let url: string = API_URL + 'horaires';
    return this._client.get<IHoraireModel[]>(url);
  }

  public getByDay(jour: string): Observable<IHoraireModel> {
    return this._client.get<IHoraireModel>(`horaire/${jour}`);
  }

  public getOne(id: string) {
    return this._apiService.get(`horaires/${id}`).pipe(
      map((data: IHoraireModel) => {
        let notFound = true;

        this.dataStore.horaires.forEach((item, index) => {
          if (item.jour === data.jour) {
            this.dataStore.horaires[index] = data;
            notFound = false;
          }
        });
        if (notFound) {
          this.dataStore.horaires.push(data);
        }
        this._horaires.next(Object.assign({}, this.dataStore).horaires);
      })
    );
  }
}
