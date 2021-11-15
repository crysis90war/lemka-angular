import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localfrBe from '@angular/common/locales/fr-BE';
import {AppComponent} from './app.component';
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {AccountRoutingModule} from "./account/account-routing.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared";

registerLocaleData(localfrBe);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    AuthRoutingModule,
    AccountRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: localfrBe}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
