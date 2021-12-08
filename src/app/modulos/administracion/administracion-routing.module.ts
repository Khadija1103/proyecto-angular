import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarUsuarioComponent } from './administrador/buscar-usuario/buscar-usuario.component';
import { CrearRolComponent } from './administrador/crear-rol/crear-rol.component';
import { EditarRolesComponent } from './administrador/editar-roles/editar-roles.component';
import { EliminarRolComponent } from './administrador/eliminar-rol/eliminar-rol.component';
import { EliminarUsuariosComponent } from './administrador/eliminar-usuarios/eliminar-usuarios.component';

const routes: Routes = [
  {
    path:"crear-rol",
    component: CrearRolComponent
  },
  {
    path:"editar-rol",
    component: EditarRolesComponent
  },
  {
    path:"eliminar-rol",
    component: EliminarRolComponent
  },
  {
    path:"buscar-usuario",
    component: BuscarUsuarioComponent
  },
  {
    path:"eliminar-usuario",
    component: EliminarUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
