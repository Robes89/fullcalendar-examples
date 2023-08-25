import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedComponent } from './pedi/pedi.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'home',
    component: CalendarioComponent,
  },
  {
    path: 'pedidos/:id',
    component: PedComponent,
    loadChildren: () =>
      import('./pedi/pedi.module').then((file) => file.PediModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
