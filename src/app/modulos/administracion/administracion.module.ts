import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearpersonComponent } from './personas/crearperson/crearperson.component';
import { EditarpersonComponent } from './personas/editarperson/editarperson.component';
import { EliminarpersonComponent } from './personas/eliminarperson/eliminarperson.component';
import { BuscarpersonComponent } from './personas/buscarperson/buscarperson.component';
import { CrearproductoComponent } from './productos/crearproducto/crearproducto.component';
import { EditarproductoComponent } from './productos/editarproducto/editarproducto.component';
import { BuscarproductoComponent } from './productos/buscarproducto/buscarproducto.component';
import { EliminarproductoComponent } from './productos/eliminarproducto/eliminarproducto.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    CrearpersonComponent,
    EditarpersonComponent,
    EliminarpersonComponent,
    BuscarpersonComponent,
    CrearproductoComponent,
    EditarproductoComponent,
    BuscarproductoComponent,
    EliminarproductoComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
