import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IMensurationModel} from "../models";
import {UserService} from "../services/api";

@Injectable({
  providedIn: 'root'
})
export class MensurationResolver implements Resolve<IMensurationModel> {
  constructor(private _userService:UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMensurationModel> {
    return this._userService.getMensurationById(route.params['id']);
  }
}
