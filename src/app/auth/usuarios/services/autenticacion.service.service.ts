import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { ServiceCrudServiceService } from './service-crud.service.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionServiceService {
  rol?:string;
  isLoggedIn = false;
 userData: any;

  constructor( private auth: Auth, private afAuth: AngularFireAuth ) {
   // this.userData = auth.authState;
  }



   login( email: string, clave:string) {
    this.isLoggedIn = true;
    //return this.afAuth.signInWithEmailAndPassword(email,clave)
    console.log(this.isLoggedIn);
    return signInWithEmailAndPassword(this.auth, email, clave);
    
  }

   logout(): any {
    this.isLoggedIn = true;
    return this.afAuth.signOut();
  }

  register( email:string, clave:string ) {
    //return createUserWithEmailAndPassword(this.afAuth, email, password);
 return this.afAuth.createUserWithEmailAndPassword(email,clave);
  }

  establecerRol(rol: string)
  {
    this.rol = rol;
  }

  isAuthenticated() {
    return this.afAuth.authState;
  }
  ObtenerRol() {
    return this.rol;
  }
}
