import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, IsAuthenticatedGuard } from './guards';
import {
  AboutComponent,
  ContactComponent,
  HomeComponent,
  HoraireComponent,
  NotFoundComponent,
} from './views';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'horaire', component: HoraireComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [IsAuthenticatedGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./views/account/account.module').then((m) => m.AccountModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'legales',
    loadChildren: () =>
      import('./views/legales/legales.module').then((m) => m.LegalesModule),
  },
  {
    path: 'demo',
    loadChildren: () =>
      import('./views/demo/demo.module').then((m) => m.DemoModule),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
