import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLibModule } from './material-lib/material-lib.module';
import { SidebarModule } from 'ng-sidebar';
import { CarsComponent } from './cars/cars.component';
import { PharmaComponent } from './pharma/pharma.component';
import { PortfoliohealingComponent } from './portfoliohealing/portfoliohealing.component';
import { HttpClientModule } from '@angular/common/http';
//In order to use the iframe
import { SafePipe } from './customPipeIframe';
/*In order to use NGRX
[!] Check file db.json and in : package.json
the *start* custom : "start": "concurrently \"ng serve\" \"json-server --watch db.json\" ",
so you need also to install :
|npm i ngrx|
|npm i json-server|
|npm i concurrently|
|npm i @ngrx/effects @ngrx/entity @ngrx/store-devtools @ngrx/router-store|*/
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { ClientReducer } from './store/reducers/client.reducer';
import { ClientsComponent } from './clients/clients.component';
import { ClientsEffects } from './store/effects/clients.effects';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    PharmaComponent,
    PortfoliohealingComponent,
    SafePipe,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialLibModule,
    SidebarModule,
    FormsModule,
    StoreModule.forRoot({ shopping: ClientReducer }),
    //I added this in order to monitor the changes in the REDUX TAB in Firefox Console
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    HttpClientModule,
    EffectsModule.forRoot([ClientsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
