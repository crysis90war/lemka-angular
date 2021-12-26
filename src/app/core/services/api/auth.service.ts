import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILoginForm, IRegisterForm } from 'src/app/core/models/forms';
import { IToken } from 'src/app/core/models/itoken';
import { ApiService } from './index';
import { TokenStorageService } from '../index';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token: IToken | null;
  private _tokenSubject: BehaviorSubject<IToken | null>;

  constructor(
    private _apiService: ApiService,
    private _tokenService: TokenStorageService,
    private _router: Router
  ) {
    this.token = this.getToken();
    this._tokenSubject = new BehaviorSubject<IToken | null>(
      this.token
    );
  }

  public login(form: ILoginForm): Observable<void> {
    return this._apiService.post('auth/login', form).pipe(
      map((t: IToken) => {
        if (t) this._tokenService.saveToken(t.token);
        this.token = t;
        this.emitTokenSubject();
      })
    );
  }

  public register(form: IRegisterForm): void {
    this._apiService.post('auth/register', form);
  }

  public logOut(): void {
    this._tokenService.signOut();
    this.token = null;
    this.emitTokenSubject();

    this._router.navigate(['auth']);
  }

  public tokenSubject(): Observable<IToken | null> {
    return this._tokenSubject.asObservable();
  }

  public emitTokenSubject(): void {
    this._tokenSubject.next(this.token);
  }

  private getToken(): IToken | null {
    let token: string | null = this._tokenService.getToken();
    if (token != null) return { token: token };
    else return null;
  }
}
