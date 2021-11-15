import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./core/components/not-found/not-found.component";
import {HomeComponent} from "./core/components/home/home.component";
import {ConditionsGeneralesComponent} from "./core/components/conditions-generales/conditions-generales.component";
import {PolitiqueConfidentialiteComponent} from "./core/components/politique-confidentialite/politique-confidentialite.component";
import {RetourRemboursementComponent} from "./core/components/retour-remboursement/retour-remboursement.component";
import {HoraireComponent} from "./core/components/horaire/horaire.component";
import {AboutComponent} from "./core/components/about/about.component";
import {ContactComponent} from "./core/components/contact/contact.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'horaire', component: HoraireComponent},
  {path: 'a-propos', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  {path: 'politique-de-confidentialite', component: PolitiqueConfidentialiteComponent},
  {path: 'retours-et-remboursements', component: RetourRemboursementComponent},
  {path: 'conditions-generales', component: ConditionsGeneralesComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
