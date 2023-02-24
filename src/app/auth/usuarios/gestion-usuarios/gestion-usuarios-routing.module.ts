import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDetallesUsuariosComponent } from './gestion-detalles-usuarios/gestion-detalles-usuarios.component';
import { GestionUsuariosComponent } from './gestion-usuarios.component';

const routes: Routes = [
  {path: '', component: GestionUsuariosComponent},
  {path: 'detalles/:id', component: GestionDetallesUsuariosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUsuariosRoutingModule { }
