import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';

const routes: Routes = [
  {path: '', component: LoginUsuarioComponent},
  {path: 'registro', component: FormUsuarioComponent},
  {path: 'gestion', component: GestionUsuariosComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
