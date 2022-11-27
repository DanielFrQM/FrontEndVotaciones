import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { MesasRoutingModule } from "./mesas-routing.module";
import { ListarComponent } from "./listar/listar.component";
import { CrearComponent } from "./crear/crear.component";
import { FormsModule } from "@angular/forms";
import { NbCardModule } from "@nebular/theme";

@NgModule({
  declarations: [ListarComponent, CrearComponent],
  imports: [
    CommonModule,
    MesasRoutingModule,
    NbCardModule,
    FontAwesomeModule,
    FormsModule,
  ],
})
export class MesasModule {}
