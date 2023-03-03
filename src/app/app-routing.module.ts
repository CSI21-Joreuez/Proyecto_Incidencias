import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from './auth/usuarios/services/roles.guards';

const routes: Routes = [
  {path:'incidencias', loadChildren: () => import('./vistas/incidencias/incidencias.module').
then(m =>m.IncidenciasModule),
data:{
  rol: 'Directivo'
},canActivate: [RolesGuard]},

{path:'form', loadChildren: () => import('./vistas/form-incidencias/form-incidencias.module').
then(m =>m.FormIncidenciasModule)},

{path:'gestion', loadChildren: () => import('./vistas/gestion-incidencias/gestion-incidencias.module').
then(m =>m.GestionIncidenciasModule),
data:{
  rol: 'Mantenimiento'
},
canActivate: [RolesGuard]
},

{path:'usuarios', loadChildren: () => import('./auth/usuarios/usuarios.module').
then(m =>m.UsuariosModule)},

{path:'listaUsuarios', loadChildren: () => import('./auth/usuarios/gestion-usuarios/gestion-usuarios.module').
then(m =>m.GestionUsuariosModule),
data:{
  rol: 'Admin'
},canActivate: [RolesGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
