import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private afb: AngularFirestore) { }
  //Listado de Todas las incidencias
    getAll(coleccion: string) {
      return this.afb.collection(coleccion).snapshotChanges();
    }
  //Busqueda de una incidencia concreta
    getOne(coleccion: string, documentId: string) {
      return this.afb.collection(coleccion).doc(documentId).snapshotChanges();
    }
  //Actualizar una incidencia concreta
    update(coleccion: string, documentId: string, data: any) {
      return this.afb.collection(coleccion).doc(documentId).update(data);
    }
  //Creación de una nueva incidencia
    create(coleccion: string, data: any) {
      return this.afb.collection(coleccion).add(data);
    }
  //Borrado de una incidencia concreta
    delete(coleccion: string, documentId: string) {
      return this.afb.collection(coleccion).doc(documentId).delete();
    }
}
