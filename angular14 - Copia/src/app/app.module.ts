import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { SupplierService } from './supplier.service';
import {  HttpClientModule } from '@angular/common/http';
import { PoTableModule } from '@po-ui/ng-components';
import { PedComponent } from './pedi/pedi.component';
import { PoModule } from '@po-ui/ng-components';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PedComponent
    
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    HttpClientModule,PoTableModule,
    PoModule,
    AppRoutingModule

   // ProtheusLibCoreModule,
    
  ],
  providers: [SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule {}
