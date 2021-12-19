import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserService} from "../services/api";
import {IDemandeDevisModel} from "../models";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DemandeDevisResolver implements Resolve<IDemandeDevisModel> {
  constructor(private _userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDemandeDevisModel> {
    return this._userService.getDemandeDevisById(route.params['id']);
  }
}
