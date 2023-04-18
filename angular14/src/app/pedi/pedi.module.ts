import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PedComponent } from './pedi.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoModalModule,
    PoModule,
    PoTemplatesModule,
    PoPageModule
  ],
  exports: [
    CommonModule,
    PoModalModule,
    PoModule,
    PoTemplatesModule,
    PoPageModule,
    
  ]
})
export class PeopleModule { }