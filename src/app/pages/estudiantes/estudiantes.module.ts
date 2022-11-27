import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbCardModule } from '@nebular/theme';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    NbCardModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class EstudiantesModule { }
