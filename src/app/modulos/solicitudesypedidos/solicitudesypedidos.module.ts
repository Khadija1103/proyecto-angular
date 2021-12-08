import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesypedidosRoutingModule } from './solicitudesypedidos-routing.module';
import { AsignarAsesorComponent } from './asignar-asesor/asignar-asesor.component';


@NgModule({
  declarations: [
    AsignarAsesorComponent
  ],
  imports: [
    CommonModule,
    SolicitudesypedidosRoutingModule
  ]
})
export class SolicitudesypedidosModule { }
