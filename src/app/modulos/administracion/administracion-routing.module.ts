import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarpersonComponent } from './personas/buscarperson/buscarperson.component';
import { CrearpersonComponent } from './personas/crearperson/crearperson.component';
import { EditarpersonComponent } from './personas/editarperson/editarperson.component';
import { EliminarpersonComponent } from './personas/eliminarperson/eliminarperson.component';

const routes: Routes = [
  {
    path:"crear",
    component: CrearpersonComponent
  },
  {
    path:"eliminar",
    component: EliminarpersonComponent
  },
  {
    path:"editar",
    component: EditarpersonComponent

  },
  {
    path:"buscar",
    component: BuscarpersonComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
