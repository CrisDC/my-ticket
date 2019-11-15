import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ListaDeseosComponent } from './shared/components/lista-deseos/lista-deseos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ListaDeseos', component: ListaDeseosComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
