import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AutenticacionServiceService } from '../services/autenticacion.service.service';
import { ServiceCrudServiceService } from '../services/service-crud.service.service';
@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  coleccion="usuarios"

  formLogin = this.fb.group({
    email: [''],
    clave: [''],
  });
 
  listaDeUsuarios: any[] = [];

  constructor(
    private authService: AutenticacionServiceService,
    private userService: ServiceCrudServiceService,
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
        const email = resp.user.email;
        this.userService.getUsuarioByFilter(this.coleccion,email).subscribe((resp: any) => {
          resp.forEach((user :any) => {

            this.listaDeUsuarios.push({
              id: user.payload.doc.id,  
              data: user.payload.doc.data()
            });
            
          });
          this.listaDeUsuarios.forEach(user => {
            this.authService.establecerRol(user.data.rol);
          });
    
          });
        this.ruta.navigate(['/']);
      })

    }
  }
