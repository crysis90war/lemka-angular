import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../token-storage.service';

import {
  IAdresseModel,
  IDemandeDevisModel,
  IMensurationModel,
  IRendezVousModel,
  IUtilisateurModel,
} from 'src/app/models';
import {
  IAdresseForm,
  IDemandeDevisForm,
  IMensurationForm,
  IUtilisateurForm,
} from 'src/app/models/forms';
import { CustomHelpers } from 'src/app/handlers/custom-helpers';

const API_URL = environment.api_url;
const USER_URL = API_URL + 'Utilisateurs/';
const ADRESSE = '/Adresse';
const MENSURATIONS = '/Mensurations';
const DEMANDES_DEVIS = '/DemandesDevis';
const RENDEZ_VOUS = '/RendezVous';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public utilisateur: IUtilisateurModel | null = null;
  private _utilisateurSubject: BehaviorSubject<IUtilisateurModel | null> =
    new BehaviorSubject<IUtilisateurModel | null>(this.utilisateur);

  constructor(
    private _client: HttpClient,
    private _tokenStorageService: TokenStorageService
  ) {}

  //#region Concernant le profil-test

  public getUserProfil(): Observable<IUtilisateurModel> {
    let url: string = USER_URL + this._tokenStorageService.decodeToken()?.id;
    return this._client
      .get<IUtilisateurModel>(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public updateUserProfil(
    form: IUtilisateurForm
  ): Observable<IUtilisateurModel> {
    let url: string = USER_URL + this._tokenStorageService.decodeToken()?.id;
    return this._client
      .put<IUtilisateurModel>(url, form)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public changePassword(oldPassword: string, newPassword: string) {
    let url: string =
      USER_URL + this._tokenStorageService.decodeToken()?.id + '/Password';
    return this._client
      .put(url, { oldPassword: oldPassword, newPassword: newPassword })
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  //#endregion

  //#region Concernant l'adresse

  public createUserAdresse(form: IAdresseForm): Observable<IAdresseModel> {
    let url: string =
      USER_URL + this._tokenStorageService.decodeToken()?.id + ADRESSE;
    return this._client
      .post<IAdresseModel>(url, form)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public updateUserAdresse(form: IAdresseForm): Observable<IAdresseModel> {
    let url: string =
      USER_URL + this._tokenStorageService.decodeToken()?.id + ADRESSE;
    return this._client
      .put<IAdresseModel>(url, form)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public deleteUserAdresse() {
    let url: string =
      USER_URL + this._tokenStorageService.decodeToken()?.id + ADRESSE;
    return this._client
      .delete(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  //#endregion

  //#region Concernant les mensurations

  public getMensurationsAll() {
    let url: string =
      USER_URL + this._tokenStorageService.decodeToken()?.id + MENSURATIONS;
    return this._client
      .get<IMensurationModel[]>(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public getMensurationById(id: number) {
    let url: string =
      USER_URL +
      this._tokenStorageService.decodeToken()?.id +
      MENSURATIONS +
      `/${id}`;
    return this._client
      .get<IMensurationModel>(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public createMensuration(form: IMensurationForm) {
    let url: string =
      USER_URL + this._tokenStorageService.decodeToken()?.id + MENSURATIONS;
    return this._client
      .post<IMensurationModel>(url, form)
      .pipe(retry(), catchError(CustomHelpers.handleError));
  }

  //#endregion

  //#region Concernant la demande de devis

  public getAllDemandeDevis() {
    let url: string =
      USER_URL + this._tokenStorageService.decodeToken()?.id + DEMANDES_DEVIS;
    return this._client
      .get<IDemandeDevisModel[]>(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public createDemandedevis(form: IDemandeDevisForm) {
    let url: string =
      USER_URL + this._tokenStorageService.decodeToken()?.id + DEMANDES_DEVIS;
    return this._client
      .post<IDemandeDevisModel>(url, form)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  //#endregion

  //#region Concernant les rebdez-vous

  public getAllRendezVous() {
    let url: string =
      USER_URL + this._tokenStorageService.decodeToken()?.id + RENDEZ_VOUS;
    return this._client
      .get<IRendezVousModel[]>(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  //#endregion

  //#region Concernant les favoris

  //#endregion

  //#region Autres méthodes utilisés avant

  public emitUtilisateurSubject(): void {
    this._utilisateurSubject.next(this.utilisateur);
  }

  public utilisateurSubject(): Observable<IUtilisateurModel | null> {
    return this._utilisateurSubject.asObservable();
  }

  //#endregion
}
