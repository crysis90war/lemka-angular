import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {
  DemandeDevisResolver,
  MensurationResolver
} from "../../core/resolvers";

import {NotFoundComponent} from '..';
import {AccountComponent} from "./account.component";

import {
  ProfilDetailsComponent,
  ProfilUpdateComponent
} from "./components/profil";

import {
  MensurationsListComponent,
  MensurationsCreateComponent,
  MensurationsDetailsComponent,
  MensurationsUpdateComponent
} from "./components/mensurations";

import {
  DemandesDevisListComponent,
  DemandesDevisCreateComponent,
  DemandesDevisDetailsComponent,
  DemandesDevisUpdateComponent
} from "./components/demandes-devis";

import {RendezVousListComponent} from "./components/rendez-vous/rendez-vous-list/rendez-vous-list.component";

import {FavorisComponent} from "./components/favoris/favoris.component";

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
          {path: 'list', component: MensurationsListComponent},
          {path: 'create', component: MensurationsCreateComponent},
          {path: ':id/details', resolve: {model: MensurationResolver}, component: MensurationsDetailsComponent},
          {path: ':id/update', resolve: {model: MensurationResolver}, component: MensurationsUpdateComponent},
        ]
      },
      {
        path: 'demandes-devis', children: [
          {path: '', redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component: DemandesDevisListComponent},
          {path: 'create', component: DemandesDevisCreateComponent},
          {path: ':id/details', resolve: {model: DemandeDevisResolver}, component: DemandesDevisDetailsComponent},
          {path: ':id/update', resolve: {model: DemandeDevisResolver}, component: DemandesDevisUpdateComponent},
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
