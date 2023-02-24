import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceCrudServiceService } from '../../services/service-crud.service.service';

@Component({
  selector: 'app-gestion-detalles-usuarios',
  templateUrl: './gestion-detalles-usuarios.component.html',
  styleUrls: ['./gestion-detalles-usuarios.component.css']
})
export class GestionDetallesUsuariosComponent implements OnInit {


  coleccion = 'usuarios';
  formUsuario = this.fb.group({
    usuario: [''],
    email: [''],
    clave: [''],
    telefono: [''],
    rol:['']
  });
  documentId: string = '';
  usuario: any;

  constructor(  private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private fire: ServiceCrudServiceService) { }

  ngOnInit(): void {
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.fire.getOne(this.coleccion, this.documentId).subscribe((resp: any) => { 
      this.formUsuario.setValue(resp.payload.data());
      console.log(resp.payload.data());
    });
  }
  guardar(){
    this.documentId = this.ruta.snapshot.paramMap.get('id')!;
    this.usuario = this.formUsuario.value;
    if(this.formUsuario.valid)
    this.fire.update(this.coleccion,this.documentId,this.usuario).then(() => {alert("Estado Actualizada")});
    else{
      alert("No se ha podido actuliazar el campo Estado")
    };
    
  }
}
