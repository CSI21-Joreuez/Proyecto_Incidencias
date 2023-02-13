import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDetallesIncidenciasComponent } from './gestion-detalles-incidencias/gestion-detalles-incidencias.component';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';

const routes: Routes = [
  {path: '', component: GestionIncidenciasComponent},
  {path: 'detalles/:id', component: GestionDetallesIncidenciasComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionIncidenciasRoutingModule { }
