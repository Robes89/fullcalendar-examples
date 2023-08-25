
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { CalendarioComponent } from './calendario.component';

const routes: Routes = [
  { path: '/home', component: CalendarioComponent }
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarioRouting {}
