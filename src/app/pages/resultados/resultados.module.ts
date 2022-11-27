import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbCardModule } from '@nebular/theme';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { CreacionComponent } from './creacion/creacion.component';
import { ListacionComponent } from './listacion/listacion.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreacionComponent,
    ListacionComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    NbCardModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class ResultadosModule { }
