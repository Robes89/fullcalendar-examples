
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';

import {  HttpClientModule } from '@angular/common/http';

import { PedComponent } from './pedi/pedi.component';

import { AppRoutingModule } from './app-routing.module';
import { CalendarioComponent } from './calendario/calendario.component';

import { SupplierService } from './calendario/services/supplier.service';
import { PoModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PedComponent,
    CalendarioComponent,

    
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    PoModule,
    FormsModule,
  //ProtheusLibCoreModule,
    
  ],
  providers: [SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule {}
