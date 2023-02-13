import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormIncidenciasRoutingModule } from './form-incidencias-routing.module';
import { FormIncidenciasComponent } from './form-incidencias.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormIncidenciasComponent
  ],
  imports: [
    CommonModule,
    FormIncidenciasRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class FormIncidenciasModule { }
