import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder } from '@angular/forms';
import { incidencia } from '../../interfaces/incidencias/incidencia';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {
  documentId: string = '';
  coleccion = 'incidencias';
  incidencia: any=[];
  displayedColumns: string[] = ['Descripcion','Lugar', 'Estado', 'Solucion', 'Revision'];

<<<<<<< HEAD
  listaIncidenciasNoRevisadas:any;
=======
  listaIncidencias: any[] = [];
  listaIncidenciasRevisadasTrue: any[] = [];
  listaIncidenciasRevisadasFalse: any[] = [];
  fontStyle?: string = ' ';
>>>>>>> b655d0b48d0138f5180a55eddbd656b690a9be26


  
  constructor( private fb: FormBuilder, private firebase: ServicesService,private  ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRevisadas();
    this.getLista();
    this.getAllNoRevisadas();
} 

getRevisadas() {
  this.firebase.getIncidenciaByFilter(this.coleccion,true).subscribe((incidenciasSnapshot: any) => {
    incidenciasSnapshot.forEach((incidenciaData:any) => {

      this.listaIncidenciasRevisadasTrue.push({
        documentId: incidenciaData.payload.doc.id, 
        ...incidenciasSnapshot.payload.doc.data()
      });
      
    });
  })
}


getLista(){
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
    })
}
getAllNoRevisadas() {
  this.firebase.getIncidenciaByFilter(this.coleccion,false).subscribe((incidenciasSnapshot: any) => {
    incidenciasSnapshot.forEach((incidenciaData:any) => {

<<<<<<< HEAD
getUnrevised(){
  this.firebase.getIncidenciaByFilter(this.coleccion,false).subscribe((incidenciasSnapshot: any) =>{
    this.listaIncidenciasNoRevisadas =this.incidencia;
    incidenciasSnapshot.forEach((incidenciaData:any) =>{
      this.listaIncidenciasNoRevisadas.push({
        documentId: incidenciaData.payload.doc.id,
            ...incidenciaData.payload.doc.data(),
      })
=======
      this.listaIncidenciasRevisadasFalse.push({
        documentId: incidenciaData.payload.doc.id, 
        ...incidenciasSnapshot.payload.doc.data()
      });
      
>>>>>>> b655d0b48d0138f5180a55eddbd656b690a9be26
    });
  })
}

}
