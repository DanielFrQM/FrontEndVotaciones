import { Component, OnInit } from '@angular/core';
import { Partido } from '../../../modelos/partido.model';
import { PartidoService } from '../../../servicios/partido.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-creando',
  templateUrl: './creando.component.html',
  styleUrls: ['./creando.component.scss']
})
export class CreandoComponent implements OnInit {
  modoCreacion:boolean = false;
  intentoEnvio:boolean = false;
  id_partido:string ='';
  partido:Partido ={
    lema:"",
    nombre:"",
  }
  constructor(private miPartidoService: PartidoService,
    private router: Router,
    private rutaActiva: ActivatedRoute) { }

    ngOnInit(): void {
      if(this.rutaActiva.snapshot.params.id_partido){
        this.modoCreacion= false;
        this.id_partido = this.rutaActiva.snapshot.params.id_partido;
        this.getPartido(this.id_partido);      
      }
      else{
        this.modoCreacion=true;  
      }
    }
  
    getPartido(id:string){
      this.miPartidoService.getPartido(id).subscribe(
        data=>{
          this.partido = data;    
        }
      )
    }

    validarDatos():boolean{
      this.intentoEnvio = true;
      if (this.partido.lema == '' || this.partido.nombre==''){
        return false;
      }
      else{
        return true;
      }
    }

    agregar():void{
      if(this.validarDatos()){
        this.intentoEnvio = true;
        this.miPartidoService.agregar(this.partido).subscribe(
          data =>{
            Swal.fire({
              title:'Creando partido',
              text:'El partido se creó de manera correcta!',
              icon:'success'  
            });
            this.router.navigate(['pages/partidos/listar'])
          }
        )
      }
    }
    
    editar():void{
      if(this.validarDatos()){
        this.miPartidoService.editar(this.partido._id,this.partido).subscribe(
          data =>{
            Swal.fire({
              title: 'Editando Partido',
              text:'El partido se actualizó de manera correcta',
              icon:'success'
            });
            this.router.navigate(['pages/partidos/listar'])
          }
        )
      }
    }

}
