import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Appcalendar } from './calendar.component';

import { SupplierService } from './supplier.service';
import {  HttpClientModule } from '@angular/common/http';
import { PoTableModule } from '@po-ui/ng-components';

import { PoModule } from '@po-ui/ng-components';
import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';


@NgModule({
  declarations: [
    Appcalendar
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    HttpClientModule,PoTableModule,
    PoModule,
    AppRoutingModule,
    AppModule
  ],
  
  providers: [SupplierService]
})
export class CalendModule {}
