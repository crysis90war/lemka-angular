import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared';
import { AccountRoutingModule } from './account-routing.module';
import {
  AccountComponent,
  AdresseAddOrUpdateComponent,
  DemandeDevisComponent,
  MensurationComponent,
  ProfilComponent,
} from './components';

// PrimeNG
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { TabMenuModule } from 'primeng/tabmenu';
import { ImageModule } from 'primeng/image';
import { CardComponent } from 'src/app/components';

@NgModule({
  declarations: [
    // Components
    CardComponent,

    // Views
    AccountComponent,
    ProfilComponent,
    AdresseAddOrUpdateComponent,
    AccountComponent,
    MensurationComponent,
    DemandeDevisComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,

    TabMenuModule,
    ImageModule,
    ButtonModule,
    TabViewModule,
    ProgressSpinnerModule,
    RippleModule,
    SharedModule,
  ],
  bootstrap: [AccountComponent],
})
export class AccountModule {}
