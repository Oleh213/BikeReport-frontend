import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DxDropDownButtonModule, DxSelectBoxModule} from "devextreme-angular";
import {AUTH_API_URL, STORE_API_URL} from "./envirements/app-injections-tokens";
import {ReportService} from "./services/report.service";
import {environment} from "./envirements/envirement";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDropDownButtonModule,
    HttpClientModule,
    DxSelectBoxModule,

  ],
  providers: [{
    provide: AUTH_API_URL,
    useValue: environment.authApi
  },
    {
      provide: ReportService
    },
    {
      provide: STORE_API_URL,
      useValue: environment.authApi,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
