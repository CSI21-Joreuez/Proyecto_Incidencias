import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsuariosRoutingModule } from './gestion-usuarios-routing.module';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { VolverModule } from 'src/app/shared/volver/volver.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GestionUsuariosRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    VolverModule
  ]
})
export class GestionUsuariosModule { }
