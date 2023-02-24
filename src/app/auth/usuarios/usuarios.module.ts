import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { GestionDetallesUsuariosComponent } from './gestion-usuarios/gestion-detalles-usuarios/gestion-detalles-usuarios.component';
import { VolverModule } from 'src/app/shared/volver/volver.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    FormUsuarioComponent,
    LoginUsuarioComponent,
    GestionUsuariosComponent,
    GestionDetallesUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    VolverModule,
    MatTableModule,
        

  ]
})
export class UsuariosModule { }
