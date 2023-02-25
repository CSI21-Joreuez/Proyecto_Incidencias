import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AutenticacionServiceService } from "./autenticacion.service.service";
import { ServiceCrudServiceService } from "./service-crud.service.service";





@Injectable({
    providedIn: 'root'
})
export class RolesGuard implements CanActivate{

    coleccion="usuarios"
    role:string='';
    constructor(private AuthService: AutenticacionServiceService, private ruta: Router,private userService: ServiceCrudServiceService){
    }

    canActivate(
        ruta: ActivatedRouteSnapshot, 
        
      state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   
    this.AuthService.isAuthenticated().subscribe(
        res => {
          //console.log(res);
          if (res && res.uid) {
            this.userService.getUsuarioByFilter(this.coleccion,res.email).subscribe(
              (res: any[])  => {
                // console.log(res.length);
                res.forEach( dataUser => {
                  this.eresAdministrador(dataUser.rol);
                  console.log(dataUser.rol)
                });
              }
            )
            return true;
          } else {
            console.log('Usuario no logueado!');
            this.ruta.navigate(['']);
            return false;
          }
        }
      );
      return true;
    }
  
    eresAdministrador(rol: string): boolean {
      if(rol === "Administrador") {
        return true;
      }else{
        this.ruta.navigate(['/listaUsuarios']);
        return false;
      }
    }
}
