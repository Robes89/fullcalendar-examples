import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates/lib';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';

@NgModule({
  declarations: [],
  imports: [CommonModule, PoModalModule, PoModule, PoPageModule,RouterModule],
  exports: [CommonModule, PoModalModule, PoModule, PoPageModule],
})
export class CalendarioModule {}
