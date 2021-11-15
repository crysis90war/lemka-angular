import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationMenuComponent} from './components/navigation-menu/navigation-menu.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {ConditionsGeneralesComponent} from './components/conditions-generales/conditions-generales.component';
import {PolitiqueConfidentialiteComponent} from './components/politique-confidentialite/politique-confidentialite.component';
import {RetourRemboursementComponent} from './components/retour-remboursement/retour-remboursement.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';
import {HoraireComponent} from './components/horaire/horaire.component';
import {SeparateurComponent} from './components/separateur/separateur.component';
import {TemoignageComponent} from './components/temoignage/temoignage.component';
import {ProductCardOneComponent} from './components/product-card-one/product-card-one.component';
import {ProductCardTwoComponent} from './components/product-card-two/product-card-two.component';
import {FeatureComponent} from './components/feature/feature.component';

@NgModule({
  declarations: [
    NavigationMenuComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    ConditionsGeneralesComponent,
    PolitiqueConfidentialiteComponent,
    RetourRemboursementComponent,
    ContactComponent,
    AboutComponent,
    HoraireComponent,
    SeparateurComponent,
    TemoignageComponent,
    ProductCardOneComponent,
    ProductCardTwoComponent,
    FeatureComponent
  ],
  exports: [
    NavigationMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class CoreModule {
}
