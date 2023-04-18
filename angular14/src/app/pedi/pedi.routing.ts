import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedComponent } from './pedi.component';

const routes: Routes = [
  { path: '/pedidos', component: PedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouting {}
