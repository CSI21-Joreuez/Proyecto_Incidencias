import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionServiceService } from '../services/autenticacion.service.service';
import { ServiceCrudServiceService } from '../services/service-crud.service.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  coleccion = 'usuarios';
  usuario: any ;

  formUsu: FormGroup



  constructor( private firebase : ServiceCrudServiceService,private fb: FormBuilder, private auth:AutenticacionServiceService, private router: Router) {
    this.formUsu = this.fb.group({
      email: [''],
      clave: [''],
      usuario:[''],
      telefono:[''],
      rol:['Invitado']
    })
   }

  ngOnInit(): void {
  }
  guardar(){
    this.auth.register(this.formUsu.value.email!, this.formUsu.value.clave!).then(res => {
      this.usuario = this.formUsu.value;
      console.log('Has sido registrado con éxito', res);
      this.firebase.create(this.coleccion,this.usuario);
      this.router.navigate(['/']);
    })
    .catch(error => {
      console.log('Algo ha fallado: ', error.message);
    });

  } 
}
