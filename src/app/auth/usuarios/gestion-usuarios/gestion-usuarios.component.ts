import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceCrudServiceService } from '../services/service-crud.service.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {
  documentId: string = '';
  coleccion = 'usuarios';
  usuario: any[] = [];
  displayedColumns: string[] = ['usuario','email', 'clave', 'telefono', 'rol'];

  constructor(private firebase: ServiceCrudServiceService,private  ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.firebase.getAll(this.coleccion).subscribe(
      (resp: any) => {
        this.usuario = [];
        resp.forEach( (snap: any) => {
          this.usuario.push(
            {
              documentId: snap.payload.doc.id,
              ...snap.payload.doc.data()
            }
          )
        });
  })
  }

}
