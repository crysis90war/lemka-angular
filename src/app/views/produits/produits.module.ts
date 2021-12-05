import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitsRoutingModule } from './produits-routing.module';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';


@NgModule({
  declarations: [
    ProduitListComponent,
    ProduitDetailsComponent
  ],
  imports: [
    CommonModule,
    ProduitsRoutingModule
  ]
})
export class ProduitsModule { }
