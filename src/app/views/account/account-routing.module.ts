import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '..';
import { AdresseAddOrUpdateComponent, DemandeDevisComponent, MensurationComponent, ProfilComponent } from './components';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'profil', component: ProfilComponent },
      { path: 'profil/adresse/add', component: AdresseAddOrUpdateComponent },
      { path: 'mensurations', component: MensurationComponent },
      { path: 'demandes-devis', component: DemandeDevisComponent },
      {
        path: '',
        redirectTo: 'profil',
        pathMatch: 'full',
      },
      { path: '**', component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
