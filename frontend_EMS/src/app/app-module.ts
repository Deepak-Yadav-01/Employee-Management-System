import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListEmp } from './list-emp/list-emp';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateEmp } from './create-emp/create-emp';
import { FormsModule } from '@angular/forms';
import { UpdateEmp } from './update-emp/update-emp';
import { ViewEmp } from './view-emp/view-emp';

@NgModule({
  declarations: [
    App,
    ListEmp,
    CreateEmp,
    UpdateEmp,
    ViewEmp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
