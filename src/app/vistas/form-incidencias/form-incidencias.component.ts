import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-form-incidencias',
  templateUrl: './form-incidencias.component.html',
  styleUrls: ['./form-incidencias.component.css']
})
export class FormIncidenciasComponent implements OnInit {
  coleccion = 'incidencias';
  incidencia: any;

  incidencias = this.fb.group({
    lugarIncidencia: [''],
    descripcion: [''],
    posibleSolucion: [''],
    estadoIncidencias:['pendiente'],
    revisionIncidencia:[false]
    
  })
  constructor( private firebase : ServicesService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  guardar(){
    this.incidencia = this.incidencias.value;
    this.firebase.create(this.coleccion,this.incidencia);
  } 
}
