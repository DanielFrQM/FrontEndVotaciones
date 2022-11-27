import { Component, OnInit } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Estudiante } from '../../../modelos/estudiante.model';
import { EstudianteService } from '../../../servicios/estudiante.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  private router: Router;
  faUserPlus = faUserPlus;

  estudiantes: Estudiante[];
  nombresColumnas: string[]=['Cedula', 'Nombre','Apellido', 'Opciones']
  constructor(private miEstudianteService: EstudianteService) { }

  ngOnInit(): void {
  }
  listar():void{
    this.miEstudianteService.listar().subscribe(
      data =>{
        this.estudiantes=data;
      },
      err =>{
        Swal.fire({
          title:'Acceso restringido',
          text:'No tiene permisos para realizar esta acción',
          icon:'error'
        })
      }
    );
  }
  agregar():void{
    this.router.navigate(['pages/estudiantes/crear'])  ;
  }
  editar(id:string):void{
    this.router.navigate(['pages/estudiantes/actualizar/'+id])
  }
  eliminar(id:string):void{
    Swal.fire({
      title:'Eliminación de estudiantes',
      text:'¿Está seguro de eliminar el estudiante?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#74DE30',
      confirmButtonText:'Si, eliminar',
      cancelButtonColor:'#E7461E',
      cancelButtonText:'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.miEstudianteService.eliminar(id).subscribe(
          data=>{
            this.ngOnInit();
            Swal.fire({
              title:'Eliminación de estudiante',
              text:'El estudiante se eliminó de manera correcta',
              icon:'success'
            })  
          })
      }  
    })
  }
}
