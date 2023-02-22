import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {
  documentId: string = '';
  coleccion = 'incidencias';
  incidencia: any;
  displayedColumns: string[] = ['Descripcion','Lugar', 'Estado', 'Solucion', 'Revision'];
  filtrado: boolean= false;

  listaIncidenciasNoRevisadas:any;

  formIncidencia = this.fb.group({
    revisionIncidencia:[false]
  });
  constructor( private fb: FormBuilder, private firebase: ServicesService,private  ruta: ActivatedRoute) { }

  ngOnInit(): void {
     // Cargamos la lista de incidencias
    /* this.firebase.getAll(this.coleccion).subscribe(
      (resp: any) => {
        this.incidencia = [];
        resp.forEach( (snap: any) => {
          this.incidencia.push(
            {
              documentId: snap.payload.doc.id,
              ...snap.payload.doc.data(),
              
            }
            
          )
        });
  })
  this.filtrado= false;
  this.firebase.getAll(this.coleccion).subscribe(
    (resp: any) => {
      this.incidencia = [];
      resp.forEach( (snap:any) => {
        
        this.incidencia.push(
          {
            documentId: snap.payload.doc.id,
            ...snap.payload.doc.data(),
          }
          
        )
      });
      console.log(this.formIncidencia.value)
      
})*/
this.getUnrevised();
} 

getUnrevised(){
  this.firebase.getIncidenciaByFilter(this.coleccion,false).subscribe((incidenciasSnapshot: any) =>{
    this.listaIncidenciasNoRevisadas =this.incidencia;
    incidenciasSnapshot.forEach((incidenciaData:any) =>{
      this.listaIncidenciasNoRevisadas.push({
        documentId: incidenciaData.payload.doc.id,
            ...incidenciaData.payload.doc.data(),
      })
    });
  })
}
}
