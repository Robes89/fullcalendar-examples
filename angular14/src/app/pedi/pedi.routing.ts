
import { RouterModule, Routes } from '@angular/router';
import { PedComponent } from './pedi.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '/pedidos', component: PedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriRouting {}
