import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AutenticacionServiceService } from "./autenticacion.service.service";





@Injectable({
    providedIn: 'root'
})
export class RolesGuard implements CanActivate{

    //coleccion="usuarios"
    rol?:string
    constructor(private AuthService: AutenticacionServiceService, private routes: Router){
    }

    canActivate(
        ruta: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.checkUserLogin(ruta);
    }
  
    /*eresAdministrador(rol: string): boolean {
      if(rol === "Administrador") {
        return true;
      }else{
        this.ruta.navigate(['/listaUsuarios']);
        return false;
      }
    }*/

    checkUserLogin(routes: ActivatedRouteSnapshot): boolean {
      //const {scopes = []} = this.AuthService.ObtenerRol();
      //const currentUser = this.AuthService.ObtenerRol();
       this.rol = this.AuthService.ObtenerRol();
      console.log(this.rol);
      
      if(this.rol === routes.data['rol'])
          return true;
      else{
          //this.router.navigate(['usuarios']);
          return false;
      }

  }
}
