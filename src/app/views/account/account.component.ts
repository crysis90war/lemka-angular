import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public items: MenuItem[];
  public activeItem: MenuItem;

  constructor(private _router: Router) {
    this.items = [
      {
        label: 'Profil',
        icon: 'pi pi-fw pi-user',
        routerLink: '/account/profil/details',
      },
      {
        label: 'Mensurations',
        icon: 'fas fa-ruler-horizontal',
        routerLink: '/account/mensurations',
      },
      {
        label: 'Demandes de devis',
        icon: 'pi pi-fw pi-file',
        routerLink: '/account/demandes-devis',
      },
      {
        label: 'Rendez-vous',
        icon: 'pi pi-fw pi-calendar',
        routerLink: '/account/rendez-vous',
      },
      {
        label: 'Favoris',
        icon: 'pi pi-fw pi-heart-fill',
        routerLink: '/account/favoris',
      },
      {
        label: 'Paramètres',
        icon: 'pi pi-fw pi-cog',
      },
    ];

    this.activeItem = this.selectActiveItem();
  }

  private checkActiveState(givenLink:string) {
    if (this._router.url.indexOf(givenLink) === -1) {
      return false;
    } else {
      return true;
    }
  }

  private selectActiveItem() {
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index].routerLink;
      if (this.checkActiveState(element)) return this.items[index];
    }
    return this.items[0];
  }

  ngOnInit(): void {}
}
