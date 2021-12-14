import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from 'src/app/shared';
import {AccountRoutingModule} from './account-routing.module';

// PrimeNG
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {RippleModule} from 'primeng/ripple';
import {TabMenuModule} from 'primeng/tabmenu';
import {ImageModule} from 'primeng/image';
import {CardComponent, FloatingInputComponent} from 'src/app/components';
import {ReactiveFormsModule} from '@angular/forms';
import {ProfilDetailsComponent} from './components/profil/profil-details/profil-details.component';
import {MensurationsListComponent} from './components/mensurations/mensurations-list/mensurations-list.component';
import {AccountComponent} from "./components/account/account.component";
import {ProfilUpdateComponent} from "./components/profil/profil-update/profil-update.component";
import {FavorisComponent} from "./components/favoris/favoris.component";
import {RendezVousListComponent} from './components/rendez-vous/rendez-vous-list/rendez-vous-list.component';
import {
  DemandesDevisListComponent
} from './components/demandes-devis/demandes-devis-list/demandes-devis-list.component';

@NgModule({
  declarations: [
    // Views
    AccountComponent,
    // profil
    ProfilDetailsComponent,
    ProfilUpdateComponent,
    // mensurations
    MensurationsListComponent,
    // rendez-vous
    RendezVousListComponent,
    // favoris
    FavorisComponent,

    // Components
    CardComponent,
    DemandesDevisListComponent,
    FloatingInputComponent

  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    SharedModule,

    TabMenuModule,
    ImageModule,
    ButtonModule,
    TabViewModule,
    ProgressSpinnerModule,
    RippleModule,
  ],
  bootstrap: [AccountComponent],
})
export class AccountModule {
}
