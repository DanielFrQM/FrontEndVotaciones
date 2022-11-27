import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbCardModule } from '@nebular/theme';

import { PartidosRoutingModule } from './partidos-routing.module';
import { CreandoComponent } from './creando/creando.component';
import { ListandoComponent } from './listando/listando.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreandoComponent,
    ListandoComponent
  ],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    NbCardModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class PartidosModule { }
