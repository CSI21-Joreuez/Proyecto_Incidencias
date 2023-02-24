import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AutenticacionServiceService } from '../services/autenticacion.service.service';
@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  coleccion="usuarios"
  listaUsers: any[] = [];

  formLogin = this.fb.group({
    email: [''],
    clave: [''],
  });
 
  listaDeUsuarios: any[] = [];

  constructor(
    private authService: AutenticacionServiceService,
    private fb: FormBuilder,
    private ruta: Router
    ) {
      
     }

  ngOnInit(): void {
  }
  login() {
    console.log(this.formLogin.value.clave)
    this.authService.login(this.formLogin.value.email!, this.formLogin.value.clave!).then(
      (resp: any) => {
        if(resp) {
          /* resp es true o false. Si es true puedo guardar el mail del usuario y su rol*/
          console.log(resp);
          this.listaUsers.forEach(user => {
            this.authService.establecerRol(user.data.rol);
          });
          this.ruta.navigate(['/']);
        } else {
          // limpiar formulario
          this.formLogin.reset();
          //this.dialog.open(DialogBoxComponent);
        }

        //console.log(resp);
      }
    );

    }
  }
