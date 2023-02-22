import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  coleccion = 'usuarios';
  usuario: any ;

  usuarios = this.fb.group({
    usuario: [''],
    clave: [''],
    email: [''],
    telefono:[''],
    rol:['Invitado']
    
  })


  constructor( private firebase : ServicesService,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  guardar(){
    this.usuario = this.usuarios.value;
    this.firebase.create(this.coleccion,this.usuario);
    alert('Incidencia Creada Correctamente');
  } 
}
