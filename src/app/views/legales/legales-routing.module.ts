import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ConditionsGeneralesComponent,
  PolitiqueConfidentialiteComponent,
  RetourRemboursementComponent,
} from './components';

const routes: Routes = [
  { path: '', redirectTo: 'pc', pathMatch: 'full' },
  {
    path: 'politique-de-confidentialite',
    component: PolitiqueConfidentialiteComponent,
  },
  {
    path: 'retours-et-remboursements',
    component: RetourRemboursementComponent,
  },
  { path: 'conditions-generales', component: ConditionsGeneralesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegalesRoutingModule {}
