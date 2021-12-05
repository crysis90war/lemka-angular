import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { HttpTokenInterceptor } from './interceptors';
import localfrBe from '@angular/common/locales/fr-BE';

import {
  FeatureComponent,
  FooterComponent,
  NavigationMenuComponent,
  ProductCardOneComponent,
  ProductCardTwoComponent,
  SeparateurComponent,
  TemoignageComponent,
  NavItemComponent,
  NavDropdownComponent,
} from './components';

import {
  AboutComponent,
  ContactComponent,
  HomeComponent,
  HoraireComponent,
  NotFoundComponent,
} from './views';

import {
  AccountRoutingModule,
  LegalesRoutingModule,
  AppRoutingModule,
  AuthRoutingModule,
  DemoRoutingModule,
} from '.';
import { BrowserModule } from '@angular/platform-browser';

registerLocaleData(localfrBe);

@NgModule({
  declarations: [
    AppComponent,

    // Views
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
    HoraireComponent,

    // Compoenents
    NavigationMenuComponent,
    FooterComponent,
    SeparateurComponent,
    TemoignageComponent,
    ProductCardOneComponent,
    ProductCardTwoComponent,
    FeatureComponent,
    NavItemComponent,
    NavDropdownComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,

    // Routings
    AppRoutingModule,
    AuthRoutingModule,
    AccountRoutingModule,
    DemoRoutingModule,
    LegalesRoutingModule,
  ],
  exports: [NavigationMenuComponent],
  providers: [
    { provide: LOCALE_ID, useValue: localfrBe },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
