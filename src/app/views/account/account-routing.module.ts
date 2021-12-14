import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from '..';
import {ProfilDetailsComponent} from "./components/profil/profil-details/profil-details.component";
import {MensurationsListComponent} from "./components/mensurations/mensurations-list/mensurations-list.component";
import {AccountComponent} from "./components/account/account.component";
import {ProfilUpdateComponent} from "./components/profil/profil-update/profil-update.component";
import {FavorisComponent} from "./components/favoris/favoris.component";
import {RendezVousListComponent} from "./components/rendez-vous/rendez-vous-list/rendez-vous-list.component";
import {
  DemandesDevisListComponent
} from "./components/demandes-devis/demandes-devis-list/demandes-devis-list.component";

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'profil', children: [
          {path: '', redirectTo: 'details', pathMatch: 'full'},
          {path: 'details', component: ProfilDetailsComponent},
          {path: 'update', component: ProfilUpdateComponent},
        ]
      },
      {
        path: 'mensurations', children: [
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component: MensurationsListComponent}
        ]
      },
      {
        path: 'demandes-devis', children: [
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component: DemandesDevisListComponent}
        ]
      },
      {
        path: 'rendez-vous', children: [
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component: RendezVousListComponent}
        ]
      },
      {path: 'favoris', component: FavorisComponent},
      {
        path: '',
        redirectTo: 'profil',
        pathMatch: 'full',
      },
      {path: '**', component: NotFoundComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {
}
