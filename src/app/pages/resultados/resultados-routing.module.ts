import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionComponent } from './creacion/creacion.component';
import { ListacionComponent } from './listacion/listacion.component';

const routes: Routes = [
{
  path: 'listar',
  component: ListacionComponent
},
{
  path: 'crear',
  component: CreacionComponent
},
{
  path:'actualizar/:id_resultado',
  component:CreacionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadosRoutingModule { }
