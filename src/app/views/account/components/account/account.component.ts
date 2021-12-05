import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  items: MenuItem[];

  constructor() {
    this.items = [
      { label: 'Profil', routerLink: 'profil', icon: 'pi pi-fw pi-user' },
      {
        label: 'Mensurations',
        routerLink: 'mensurations',
        icon: 'fas fa-ruler-horizontal',
      },
      {
        label: 'Demandes de devis',
        routerLink: 'demandes-devis',
        icon: 'pi pi-fw pi-file',
      },
      { label: 'Rendez-vous', icon: 'pi pi-fw pi-calendar' },
      { label: 'Paramètres', icon: 'pi pi-fw pi-cog' },
    ];
  }

  ngOnInit(): void {}
}
