import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarAsesorComponent } from './asignar-asesor/asignar-asesor.component';

const routes: Routes = [
  {
    path:"asignar-asesor",
    component: AsignarAsesorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesypedidosRoutingModule { }
