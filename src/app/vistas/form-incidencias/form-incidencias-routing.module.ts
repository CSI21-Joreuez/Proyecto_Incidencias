import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormIncidenciasComponent } from './form-incidencias.component';

const routes: Routes = [
  {path: '', component: FormIncidenciasComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormIncidenciasRoutingModule { }
