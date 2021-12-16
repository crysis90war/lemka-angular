import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../../services/api";
import {IMensurationModel} from "../../../../../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mensurations-list',
  templateUrl: './mensurations-list.component.html',
  styleUrls: ['./mensurations-list.component.scss']
})
export class MensurationsListComponent implements OnInit {
  public mensurations: IMensurationModel[] = [];

  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit(): void {
    this._userService.getMensurationsAll().subscribe({
      next: (res) => {
        this.mensurations = res;
      },
      error: (error) => console.error(error)
    })
  }

  public navigateTo(id:number, to:string):string {
    return `../${id}/${to}`;
  }
}
