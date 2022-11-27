import { Component, OnInit } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Resultado } from '../../../modelos/resultado.model';
import { ResultadoService } from '../../../servicios/resultado.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listacion',
  templateUrl: './listacion.component.html',
  styleUrls: ['./listacion.component.scss']
})
export class ListacionComponent implements OnInit {

  faUserPlus = faUserPlus;

  resultados: Resultado[];
  nombresColumnas: string[]=['Numero por Mesa','Opciones']

  constructor(private miResultadoService: ResultadoService,  private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }
  listar():void{
    this.miResultadoService.listar().subscribe(
      data =>{
        this.resultados=data;
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
    this.router.navigate(['pages/resultados/crear'])  ;
  }
  editar(id:string):void{
    this.router.navigate(['pages/resultados/actualizar/'+id])
  }
  eliminar(id:string):void{
    Swal.fire({
      title:'Eliminación de resultados',
      text:'¿Está seguro de eliminar el resultado?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#74DE30',
      confirmButtonText:'Si, eliminar',
      cancelButtonColor:'#E7461E',
      cancelButtonText:'Cancelar'
    }).then((result)=>{
      if(result.isConfirmed){
        this.miResultadoService.eliminar(id).subscribe(
          data=>{
            this.ngOnInit();
            Swal.fire({
              title:'Eliminación de resultado',
              text:'El resultado se eliminó de manera correcta',
              icon:'success'
            })  
          })
      }  
    })
  }

}
