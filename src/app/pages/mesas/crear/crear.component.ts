import { Component, OnInit } from "@angular/core";
import { Mesa } from "../../../modelos/mesa.model";
import { MesaService } from "../../../servicios/mesa.service";
import Swal from "sweetalert2";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "ngx-crear",
  templateUrl: "./crear.component.html",
  styleUrls: ["./crear.component.scss"],
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = false;
  intentoEnvio: boolean = false;
  id_mesa: string = "";
  mesa: Mesa = {
    numero: "",
    cedulas_inscritas: "",
  };
  constructor(
    private miMesaService: MesaService,
    private router: Router,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_mesa) {
      this.modoCreacion = false;
      this.id_mesa = this.rutaActiva.snapshot.params.id_mesa;
      this.getMesa(this.id_mesa);
    } else {
      this.modoCreacion = true;
    }
  }

  getMesa(id: string) {
    this.miMesaService.getMesa(id).subscribe((data) => {
      this.mesa = data;
    });
  }

  validarDatos(): boolean {
    this.intentoEnvio = true;
    if (this.mesa.numero == "" || this.mesa.cedulas_inscritas == "") {
      return false;
    } else {
      return true;
    }
  }

  agregar(): void {
    if (this.validarDatos()) {
      this.intentoEnvio = true;
      this.miMesaService.agregar(this.mesa).subscribe((data) => {
        Swal.fire({
          title: "Creando Mesa de Votacion",
          text: "La Mesa se creó correctamente!",
          icon: "success",
        });
        this.router.navigate(["pages/mesas/listar"]);
      });
    }
  }

  editar(): void {
    if (this.validarDatos()) {
      this.miMesaService.editar(this.mesa._id, this.mesa).subscribe((data) => {
        Swal.fire({
          title: "Modificacion de Mesa",
          text: "La mesa se actualizó de manera correcta",
          icon: "success",
        });
        this.router.navigate(["pages/mesas/listar"]);
      });
    }
  }
}
