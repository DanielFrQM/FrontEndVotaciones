import { Component, OnInit } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Partido } from '../../../modelos/partido.model';
import { PartidoService } from '../../../servicios/partido.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listando',
  templateUrl: './listando.component.html',
  styleUrls: ['./listando.component.scss']
})
export class ListandoComponent implements OnInit {

  faUserPlus = faUserPlus;

  partidos: Partido[];
  nombresColumnas: string[]=['Lema', 'Nombre','Opciones']
  constructor(private miPartidoService: PartidoService,  private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miPartidoService.listar().subscribe(
      data =>{
        this.partidos=data;
      },
      err =>{
        Swal.fire({
          title:'Acceso restringido',
          text:'No tiene permisos para realizar esta acción',
          icon:'error'
        })
        this.router.navigate(['pages/dashboard'])
      }
    );
  }
  agregar():void{
    this.router.navigate(['pages/partidos/crear'])  ;
  }
  editar(id:string):void{
    this.router.navigate(['pages/partidos/actualizar/'+id])
  }
  eliminar(id:string):void{
    Swal.fire({
      title:'Eliminación de partidos',
      text:'¿Está seguro de eliminar el partido?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#74DE30',
      confirmButtonText:'Si, eliminar',
      cancelButtonColor:'#E7461E',
      cancelButtonText:'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.miPartidoService.eliminar(id).subscribe(
          data=>{
            this.ngOnInit();
            Swal.fire({
              title:'Eliminación de partido',
              text:'El partido se eliminó de manera correcta',
              icon:'success'
            })  
          })
      }  
    })
  }

}
