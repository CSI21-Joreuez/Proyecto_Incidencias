import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {
  documentId: string = '';
  coleccion = 'incidencias';
  incidencia: any[] = [];
  displayedColumns: string[] = ['Descripcion','Lugar', 'Estado', 'Solucion', 'Revision'];

  constructor( private firebase: ServicesService,private  ruta: ActivatedRoute) { }

  ngOnInit(): void {
     // Cargamos la lista de incidencias
     this.firebase.getAll(this.coleccion).subscribe(
      (resp: any) => {
        this.incidencia = [];
        resp.forEach( (snap: any) => {
          this.incidencia.push(
            {
              documentId: snap.payload.doc.id,
              ...snap.payload.doc.data()
              
            }
          )
        });
  })}
  

  
}
