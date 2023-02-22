import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {
  documentId: string = '';
  coleccion = 'incidencias';

  listaIncidencias: any[] = [];
  listaIncidenciasRevisadasTrue: any[] = [];
  listaIncidenciasRevisadasFalse: any[] = [];
  fontStyle?: string = ' ';

  
  constructor( private fb: FormBuilder, private firebase: ServicesService) { }

  ngOnInit(): void {
    
    this.getLista();
    this.getRevisadas();
    this.getNoRevisadas();
} 

getRevisadas() {
  this.firebase.getIncidenciaByFilter(this.coleccion,true).subscribe(
    (incidenciasSnapshot: any) => {
      this.listaIncidenciasRevisadasTrue = [];
    incidenciasSnapshot.forEach((incidenciaData:any) => {

      this.listaIncidenciasRevisadasTrue.push(
      {
        documentId: incidenciaData.payload.doc.id, 
        ...incidenciaData.payload.doc.data()
      }
      )
      
    });
  })
}


getLista(){
  this.firebase.getAll(this.coleccion).subscribe(
    (resp: any) => {
      this.listaIncidencias = [];
      resp.forEach( (snap:any) => {
        
        this.listaIncidencias.push(
          {
            documentId: snap.payload.doc.id,
            ...snap.payload.doc.data(),
          }
          
        )
        
      });
    })
}
getNoRevisadas() {
  this.firebase.getIncidenciaByFilter(this.coleccion,false).subscribe(
    (incidenciasSnapshot: any) => {
      this.listaIncidenciasRevisadasFalse=[];
    incidenciasSnapshot.forEach((incidenciaData:any) => {
      this.listaIncidenciasRevisadasFalse.push({
        documentId: incidenciaData.payload.doc.id, 
        ...incidenciaData.payload.doc.data()
      });
      
    });
  })
}

}
