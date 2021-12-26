import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, retry} from 'rxjs';
import {CustomHelpers} from 'src/app/core/handlers/custom-helpers';
import {IGenreModel} from 'src/app/core/models';
import {environment} from 'src/environments/environment';

const API_URL = environment.api_url;
const ENDPOINT = API_URL + 'Genres';

@Injectable({
  providedIn: 'root',
})
export class GenreService {
  constructor(private _client: HttpClient) {}

  public getAll() {
    return this._client
      .get<IGenreModel[]>(ENDPOINT)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public getById(id: number) {
    let url: string = ENDPOINT + `/${id}`;
    return this._client
      .get<IGenreModel>(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }
}
