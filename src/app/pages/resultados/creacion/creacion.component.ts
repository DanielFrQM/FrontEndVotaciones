import { Component, OnInit } from '@angular/core';
import { Resultado } from '../../../modelos/resultado.model';
import { ResultadoService } from '../../../servicios/resultado.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.scss']
})
export class CreacionComponent implements OnInit {
  modoCreacion:boolean = false;
  intentoEnvio:boolean = false;
  id_resultado:string ='';
  resultado:Resultado ={
    numero_mesa:"",
  }
  constructor(private miResultadoService: ResultadoService,
    private router: Router,
    private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.rutaActiva.snapshot.params.id_resultado){
      this.modoCreacion= false;
      this.id_resultado = this.rutaActiva.snapshot.params.id_resultado;
      this.getResultado(this.id_resultado);      
    }
    else{
      this.modoCreacion=true;  
    }
  }

  getResultado(id:string){
    this.miResultadoService.getResultado(id).subscribe(
      data=>{
        this.resultado = data;    
      }
    )
  }

  validarDatos():boolean{
    this.intentoEnvio = true;
    if (this.resultado.numero_mesa == ''){
      return false;
    }
    else{
      return true;
    }
  }

  agregar():void{
    if(this.validarDatos()){
      this.intentoEnvio = true;
      this.miResultadoService.agregar(this.resultado).subscribe(
        data =>{
          Swal.fire({
            title:'Creando resultado',
            text:'El resultado se creó de manera correcta!',
            icon:'success'  
          });
          this.router.navigate(['pages/resultados/listar'])
        }
      )
    }
  }
  
  editar():void{
    if(this.validarDatos()){
      this.miResultadoService.editar(this.resultado._id,this.resultado).subscribe(
        data =>{
          Swal.fire({
            title: 'Editando Resultado',
            text:'El resultado se actualizó de manera correcta',
            icon:'success'
          });
          this.router.navigate(['pages/resultados/listar'])
        }
      )
    }
  }

}
