import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:"",
    component:InicioComponent
  },
 
  {
    path:"seguridad",
    loadChildren:()=>import("./modulos/seguridad/seguridad.module").then(x=>x.SeguridadModule)
    
  },
  {
    path:"administracion",
    loadChildren:()=>import("./modulos/administracion/administracion.module").then(x=>x.AdministracionModule)
  },

  {
    path:"pedidos",
    loadChildren:()=>import("./modulos/pedidos/pedidos.module").then(x=>x.PedidosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
