import { Component, OnInit } from "@angular/core";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Mesa } from "../../../modelos/mesa.model";
import { MesaService } from "../../../servicios/mesa.service";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.scss"],
})
export class ListarComponent implements OnInit {
  faUserPlus = faUserPlus;

  mesas: Mesa[];
  nombresColumnas: string[] = ["Numero", "Cedulas Inscriptas", "Opciones"];
  constructor(private miMesaService: MesaService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }
  listar(): void {
    this.miMesaService.listar().subscribe(
      (data) => {
        this.mesas = data;
      },
      (err) => {
        Swal.fire({
          title: "Acceso restringido",
          text: "No tiene permisos para realizar esta acción",
          icon: "error",
        });
        this.router.navigate(["pages/dashboard"]);
      }
    );
  }
  agregar(): void {
    this.router.navigate(["pages/mesas/crear"]);
  }
  editar(id: string): void {
    this.router.navigate(["pages/mesas/actualizar/" + id]);
  }
  eliminar(id: string): void {
    Swal.fire({
      title: "Eliminación de candidatos",
      text: "¿Está seguro de eliminar el candidato?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#74DE30",
      confirmButtonText: "Si, eliminar",
      cancelButtonColor: "#E7461E",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        this.miMesaService.eliminar(id).subscribe((data) => {
          this.ngOnInit();
          Swal.fire({
            title: "Eliminación de candidato",
            text: "El candidato se eliminó de manera correcta",
            icon: "success",
          });
        });
      }
    });
  }
}
