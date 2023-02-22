import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidenciasRoutingModule } from './incidencias-routing.module';
import { IncidenciasComponent } from './incidencias.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { VolverModule } from '../../shared/volver/volver.module';
import { DetallesIncidenciasComponent } from './detalles-incidencias/detalles-incidencias.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';




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
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule
    
    
  ]
})
export class IncidenciasModule { }
