import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalesRoutingModule } from './legales-routing.module';
import {
  ConditionsGeneralesComponent,
  PolitiqueConfidentialiteComponent,
  RetourRemboursementComponent,
} from './components';

@NgModule({
  declarations: [
    PolitiqueConfidentialiteComponent,
    RetourRemboursementComponent,
    ConditionsGeneralesComponent,
  ],
  imports: [CommonModule, LegalesRoutingModule],
  exports: [ConditionsGeneralesComponent],
})
export class LegalesModule {}
