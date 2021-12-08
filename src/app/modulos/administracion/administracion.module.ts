import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearRolComponent } from './administrador/crear-rol/crear-rol.component';
import { EditarRolesComponent } from './administrador/editar-roles/editar-roles.component';
import { EliminarRolComponent } from './administrador/eliminar-rol/eliminar-rol.component';
import { EliminarUsuariosComponent } from './administrador/eliminar-usuarios/eliminar-usuarios.component';
import { EliminarPlanesComponent } from './planes/eliminar-planes/eliminar-planes.component';
import { BuscarPlanesComponent } from './planes/buscar-planes/buscar-planes.component';
import { EditarPlanesComponent } from './planes/editar-planes/editar-planes.component';
import { BuscarUsuarioComponent } from './administrador/buscar-usuario/buscar-usuario.component';
import { BuscarProductoyserviciosComponent } from './productosyservicios/buscar-productoyservicios/buscar-productoyservicios.component';
import { EliminarProductosyserviciosComponent } from './productosyservicios/eliminar-productosyservicios/eliminar-productosyservicios.component';



@NgModule({
  declarations: [
    CrearRolComponent,
    EditarRolesComponent,
    EliminarRolComponent,
    EliminarUsuariosComponent,
    EliminarPlanesComponent,
    BuscarPlanesComponent,
    EditarPlanesComponent,
    BuscarUsuarioComponent,
    BuscarProductoyserviciosComponent,
    EliminarProductosyserviciosComponent,
   
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
