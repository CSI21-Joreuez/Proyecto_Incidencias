import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-detalles-incidencias',
  templateUrl: './detalles-incidencias.component.html',
  styleUrls: ['./detalles-incidencias.component.css']
})
export class DetallesIncidenciasComponent implements OnInit {
  coleccion = 'incidencias';
  formIncidencia = this.fb.group({
    descripcion: ['', Validators.required],
    lugarIncidencia: [''],
    posibleSolucion: [''],
    estadoIncidencias: [''],
    revisionIncidencia:[false]
  });
  documentId: string = '';
  incidencia: any;

  constructor(  private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private fire: ServicesService) { }

  ngOnInit(): void {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.fire.getOne(this.coleccion, this.documentId).subscribe((resp: any) => { 
      this.formIncidencia.setValue(resp.payload.data());
      console.log(resp.payload.data());
    });
  }
  guardar(){
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.incidencia = this.formIncidencia.value;
    if(this.formIncidencia.valid)
    this.fire.update(this.coleccion,this.documentId,this.incidencia).then(() => {alert("Revision Actualizada")});
    else{
      alert("No se ha podido actuliazar el campo Revision")
    };
    
  }

}
