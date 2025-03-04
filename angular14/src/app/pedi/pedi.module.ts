import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';
import { PedComponent } from './pedi.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { PoFieldModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [CommonModule, PoModalModule, PoModule, PoPageModule, FormsModule,RouterModule,PoPageDynamicTableModule,],
  exports: [CommonModule, PoModalModule, PoModule, PoPageModule],
})
export class PediModule {}
