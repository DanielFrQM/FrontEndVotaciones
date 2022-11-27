import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreandoComponent } from './creando/creando.component';
import { ListandoComponent } from './listando/listando.component';

const routes: Routes = [ 
{
  path: 'listar',
  component: ListandoComponent
},
{
  path: 'crear',
  component: CreandoComponent
},
{
  path:'actualizar/:id_partido',
  component:CreandoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
