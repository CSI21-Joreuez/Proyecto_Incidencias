import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionIncidenciasRoutingModule } from './gestion-incidencias-routing.module';
import { GestionIncidenciasComponent } from './gestion-incidencias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { VolverModule } from 'src/app/shared/volver/volver.module';
import { GestionDetallesIncidenciasComponent } from './gestion-detalles-incidencias/gestion-detalles-incidencias.component';


@NgModule({
  declarations: [
    GestionIncidenciasComponent,
    GestionDetallesIncidenciasComponent
  ],
  imports: [
    CommonModule,
    GestionIncidenciasRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    VolverModule,
  ]
})
export class GestionIncidenciasModule { }
