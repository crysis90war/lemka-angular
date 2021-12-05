import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { ILoggedUser } from '../models';

const TOKEN_KEY = 'ai_user';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  public loggedUser?:ILoggedUser|null;

  public signOut(): void {
    window.sessionStorage.clear();
    window.sessionStorage.removeItem(TOKEN_KEY);
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    this.loggedUser = null;
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = this.getToken();
    if (user) {
      return JSON.parse(user);
    }

    return null;
  }

  public decodeToken(): ILoggedUser | null {
    let token:string|null = this.getToken();
    if (token === null) return null;

    const decodedUser: any = jwt_decode(token);
    let user: ILoggedUser | null = null;
    if (decodedUser !== null) {
      user = {
        id: decodedUser[
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'
        ],
        email: decodedUser['email'],
        username: decodedUser['username'],
        role: decodedUser['role'],
        statut: decodedUser['statut'],
      };
    }

    return user;
  }
}
