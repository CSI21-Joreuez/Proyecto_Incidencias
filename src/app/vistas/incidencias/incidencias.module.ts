import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidenciasRoutingModule } from './incidencias-routing.module';
import { IncidenciasComponent } from './incidencias.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { VolverModule } from '../../shared/volver/volver.module';
import { DetallesIncidenciasComponent } from './detalles-incidencias/detalles-incidencias.component';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    IncidenciasComponent,
    DetallesIncidenciasComponent
  ],
  imports: [
    CommonModule,
    IncidenciasRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    VolverModule,
    MatFormFieldModule
    
    
  ]
})
export class IncidenciasModule { }
