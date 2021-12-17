import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {TokenStorageService} from '../token-storage.service';

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
import {CustomHelpers} from 'src/app/handlers/custom-helpers';
import {IMesureModel} from "../../models/imesure-model";
import {IMesureForm} from "../../models/forms/imesure-form";

const API_URL = environment.api_url;
const ADRESSE = 'Adresse';
const MENSURATIONS = 'Mensurations';
const DEMANDES_DEVIS = 'DemandesDevis';
const RENDEZ_VOUS = 'RendezVous';

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
  ) {
  }

  //#region Concernant le profil-test

  public getUserProfil(): Observable<IUtilisateurModel> {
    let url: string = this._url();
    return this._client.get<IUtilisateurModel>(url).pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public updateUserProfil(form: IUtilisateurForm): Observable<IUtilisateurModel> {
    let url: string = this._url();
    return this._client.put<IUtilisateurModel>(url, form).pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public changePassword(oldPassword: string, newPassword: string) {
    let url: string = this._url(['Password']);
    return this._client
      .put(url, {oldPassword: oldPassword, newPassword: newPassword})
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  //#endregion

  //#region Concernant l'adresse

  public createUserAdresse(form: IAdresseForm): Observable<IAdresseModel> {
    let url: string = this._url([ADRESSE]);
    return this._client
      .post<IAdresseModel>(url, form)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public updateUserAdresse(form: IAdresseForm): Observable<IAdresseModel> {
    let url: string = this._url([ADRESSE]);
    return this._client
      .put<IAdresseModel>(url, form)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public deleteUserAdresse() {
    let url: string = this._url([ADRESSE]);
    return this._client
      .delete(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  //#endregion

  //#region Concernant les mensurations

  public getMensurationsAll(): Observable<IMensurationModel[]> {
    let url: string = this._url([MENSURATIONS]);
    return this._client
      .get<IMensurationModel[]>(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public createMensuration(form: IMensurationForm): Observable<IMensurationModel> {
    let url: string = this._url([MENSURATIONS]);
    return this._client.post<IMensurationModel>(url, form).pipe(retry(1), catchError(CustomHelpers.handleError));
  }

  public getMensurationById(id: number): Observable<IMensurationModel> {
    let url: string = this._url([MENSURATIONS, id]);
    return this._client
      .get<IMensurationModel>(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public updateMensuration(id: number, form: IMensurationForm): Observable<IMensurationModel> {
    let url: string = this._url([MENSURATIONS, id]);
    return this._client.put<IMensurationModel>(url, form).pipe(retry(1), catchError(CustomHelpers.handleError));
  }

  public deleteMensuration(id:number) {
    let url:string = this._url([MENSURATIONS, id]);
    return this._client.delete(url).pipe(retry(0), catchError(CustomHelpers.handleError));
  }

  public getMesures(id: number): Observable<IMesureModel[]> {
    let url: string = this._url([MENSURATIONS, id, 'Mesures']);
    return this._client.get<IMesureModel[]>(url).pipe(retry(1), catchError(CustomHelpers.handleError))
  }

  public updateMesure(mensurationId: number, mesureId: number, form: IMesureForm): Observable<IMesureModel> {
    let url: string = this._url([MENSURATIONS, mensurationId, 'Mesures', mesureId]);
    return this._client.put<IMesureModel>(url, form).pipe(retry(1), catchError(CustomHelpers.handleError))
  }

  //#endregion

  //#region Concernant la demande de devis

  public getAllDemandesDevis() {
    let url: string = this._url([DEMANDES_DEVIS]);
    return this._client
      .get<IDemandeDevisModel[]>(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  public createDemandedevis(form: IDemandeDevisForm) {
    let url: string = this._url([DEMANDES_DEVIS]);
    return this._client
      .post<IDemandeDevisModel>(url, form)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  //#endregion

  //#region Concernant les rebdez-vous

  public getAllRendezVous() {
    let url: string = this._url([RENDEZ_VOUS]);
    return this._client
      .get<IRendezVousModel[]>(url)
      .pipe(retry(2), catchError(CustomHelpers.handleError));
  }

  //#endregion

  //#region Concernant les favoris

  //#endregion

  //#region Autres méthodes utilisés avant

  private _userId(): number {
    return this._tokenStorageService.decodeToken()?.id;
  }

  private _url(ressources: any[] = []): string {
    let baseUrl: string = `${API_URL}Utilisateurs/${this._userId()}`;
    if (ressources.length > 0) {
      for (let i = 0; i < ressources.length; i++) {
        baseUrl += `/${ressources[i]}`;
      }
    }
    return baseUrl;
  }

  public emitUtilisateurSubject(): void {
    this._utilisateurSubject.next(this.utilisateur);
  }

  public utilisateurSubject(): Observable<IUtilisateurModel | null> {
    return this._utilisateurSubject.asObservable();
  }

  //#endregion
}
