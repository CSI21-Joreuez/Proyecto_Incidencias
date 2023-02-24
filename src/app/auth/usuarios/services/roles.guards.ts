import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AutenticacionServiceService } from "./autenticacion.service.service";





@Injectable({
    providedIn: 'root'
})
export class RolesGuard implements CanActivate{

    role:string='';
    constructor(private AuthService: AutenticacionServiceService, private ruta: Router){
    }

    canActivate(
        ruta: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.checkUserLogin(ruta);
    }
    checkUserLogin(route: ActivatedRouteSnapshot): boolean {
        this.role = this.AuthService.verRol();

        if(this.role === route.data["role"])
            return true;
        else{
            this.ruta.navigate(['']);
            return false;
        }
    }
}