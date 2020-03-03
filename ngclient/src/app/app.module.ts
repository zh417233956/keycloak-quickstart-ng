// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule,DoBootstrap } from '@angular/core';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// // export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppComponent, HomeComponent } from './components';
import { AppRoutingModule } from './app-routing.module';
import { initializer } from './utils/app-init';

@NgModule({
  declarations: [AppComponent, HomeComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ClarityModule,
    KeycloakAngularModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
