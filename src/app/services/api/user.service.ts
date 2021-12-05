import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAdresseModel, ILoggedUser, IUtilisateurModel } from 'src/app/models';
import { IUtilisateurForm } from 'src/app/models/forms';
import { IAdresseForm } from 'src/app/models/forms/iadresse-form';
import { ApiService } from '.';
import { TokenStorageService } from '..';

const USER_URL = 'Utilisateurs';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnDestroy {
  private loggedInUser?: ILoggedUser | null;
  public utilisateur: IUtilisateurModel | null = null;
  public adresse: IAdresseModel| null = null;
  private _utilisateurSubject: BehaviorSubject<IUtilisateurModel | null>;

  constructor(
    private _apiService: ApiService,
    private _tokenStorageService: TokenStorageService
  ) {
    this._utilisateurSubject = new BehaviorSubject<IUtilisateurModel | null>(
      this.utilisateur
    );
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  public getProfil(): Observable<void> {
    this.setUser();
    return this._apiService.get(`${USER_URL}/${this.loggedInUser?.id}`).pipe(
      map((u: IUtilisateurModel) => {
        this.utilisateur = u;
        this.getUtilisateurAdresse(u.id)
        this.utilisateur.adresse = this.adresse;
        this.emitUtilisateurSubject();
      })
    );
  }

  public updateProfil(form: IUtilisateurForm): Observable<void> {
    return this._apiService.put(`${USER_URL}/${this.utilisateur?.id}`);
  }

  public changePassword(oldPassword: string, newPassword: string): void {}

  public getAdresse(): void {}

  public utilisateurSubject(): Observable<IUtilisateurModel | null> {
    return this._utilisateurSubject.asObservable();
  }

  public getUtilisateurAdresse(userId: number) {
    return this._apiService.get(`${USER_URL}/${userId}/Adresse`).pipe(
      map((a: IAdresseModel) => {
        this.adresse = a
      })
    )
  }

  public createUtilisateurAdresse(userId:number, form:IAdresseForm) {
    return this._apiService.post(`${USER_URL}/${userId}/Adresse`, form).pipe(
      map((a:IAdresseModel) => {
        this.adresse = a
      })
    )
  }

  public emitUtilisateurSubject(): void {
    this._utilisateurSubject.next(this.utilisateur);
  }

  private setUser() {
    this.loggedInUser = this._tokenStorageService.decodeToken();
  }
}
