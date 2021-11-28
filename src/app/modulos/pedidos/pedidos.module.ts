import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { RealizarpedidoComponent } from './realizarpedido/realizarpedido.component';
import { BuscarpedidoComponent } from './buscarpedido/buscarpedido.component';
import { EditarpedidoComponent } from './editarpedido/editarpedido.component';
import { EliminarpedidoComponent } from './eliminarpedido/eliminarpedido.component';


@NgModule({
  declarations: [
    RealizarpedidoComponent,
    BuscarpedidoComponent,
    EditarpedidoComponent,
    EliminarpedidoComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
