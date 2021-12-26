import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from 'src/app/shared';
import {ActivationRequiredComponent} from './components/activation-required/activation-required.component';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ActivationRequiredComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
  providers: [],
  bootstrap: [LoginComponent],
})
export class AuthModule {
}
