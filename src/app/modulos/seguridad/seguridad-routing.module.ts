import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuoerarClaveComponent } from './recuoerar-clave/recuoerar-clave.component';

const routes: Routes = [
  {
    path:"cambiar-clave",
    component: CambioClaveComponent
  },
  {
    path:"identificacion",
    component: IdentificacionComponent
  },
  {
    path:"recupera-clave",
    component: RecuoerarClaveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
