import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IHoraireModel } from 'src/app/models/ihoraire-model';
import { ApiService } from '.';

@Injectable({
  providedIn: 'root',
})
export class HoraireService {
  public hoaires!: Array<IHoraireModel>;

  constructor(private _apiService: ApiService) {}

  public getHoraires() {
    return this._apiService.get('horaires').pipe(
      map((horaires:Array<IHoraireModel>) => {
        this.hoaires = horaires
      }))
  }
}
