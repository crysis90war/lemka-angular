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
import {AccountComponent} from "./account.component";
import {FavorisComponent} from "./components/favoris/favoris.component";
import {RendezVousListComponent} from './components/rendez-vous/rendez-vous-list/rendez-vous-list.component';
import {MesureFormInputComponent} from "../../components/mesure-form-input/mesure-form-input.component";
import {TableauComponent} from "../../components/tableau/tableau.component";
import {DoubleListBoxComponent} from "../../components/double-list-box/double-list-box.component";
import {ProfilDetailsComponent, ProfilUpdateComponent} from "./components/profil";
import {
  DemandesDevisCreateComponent,
  DemandesDevisDetailsComponent,
  DemandesDevisListComponent,
  DemandesDevisUpdateComponent
} from "./components/demandes-devis";
import {
  MensurationsCreateComponent,
  MensurationsDetailsComponent,
  MensurationsListComponent,
  MensurationsUpdateComponent
} from "./components/mensurations";

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
    FloatingInputComponent,
    MensurationsCreateComponent,
    MensurationsDetailsComponent,
    MensurationsUpdateComponent,
    MesureFormInputComponent,
    DemandesDevisCreateComponent,
    DemandesDevisDetailsComponent,
    DemandesDevisUpdateComponent,
    TableauComponent,
    DoubleListBoxComponent
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
