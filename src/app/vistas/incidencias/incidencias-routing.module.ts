import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesIncidenciasComponent } from './detalles-incidencias/detalles-incidencias.component';
import { IncidenciasComponent } from './incidencias.component';
const routes: Routes = [
  {path: '', component: IncidenciasComponent},
  {path: 'detalles/:id', component: DetallesIncidenciasComponent},
  { path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidenciasRoutingModule { }
