import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PedComponent } from './pedi/pedi.component';
const routes: Routes = [
  {
    path: 'home',    component: AppComponent
  },
  {
    path: 'pedi',    component: PedComponent

    // loadChildren:()=> import('../app/home/home.module')
    //   .then((file)=>file.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
