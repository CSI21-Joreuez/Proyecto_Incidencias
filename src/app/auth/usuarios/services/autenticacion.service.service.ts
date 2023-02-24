import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { ServiceCrudServiceService } from './service-crud.service.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionServiceService {
 private role: string ='';
 private isLoggedIn = false;
 userData: any;

  constructor(private afAuth: AngularFireAuth, private serviceCrud: ServiceCrudServiceService ) {
   // this.userData = auth.authState;
  }



   login( email: string, clave:string) {
    this.isLoggedIn = true;
    return this.afAuth.signInWithEmailAndPassword(email,clave)
  }

   logout(): any {
    this.isLoggedIn = true;
    return this.afAuth.signOut();
  }

  register( email:string, clave:string ) {
    //return createUserWithEmailAndPassword(this.afAuth, email, password);
 return this.afAuth.createUserWithEmailAndPassword(email,clave);
  }

  establecerRol(role: string)
  {
    this.role = role;
  }

  verRol() {
    return this.role;
  }
  isAuthenticated() {
    return this.afAuth.authState;
  }
}
