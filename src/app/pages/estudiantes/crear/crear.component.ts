import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../../modelos/estudiante.model';
import { EstudianteService } from '../../../servicios/estudiante.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion:boolean = false;
  intentoEnvio:boolean = false;
  id_estudiante:string ='';
  estudiante:Estudiante ={
    cedula:"",
    nombre:"",
    apellido:""
  }
  constructor(private miEstudianteService: EstudianteService,
    private router: Router,
    private rutaActiva: ActivatedRoute) { }

    ngOnInit(): void {
      if(this.rutaActiva.snapshot.params.id_estudiante){
        this.modoCreacion= false;
        this.id_estudiante = this.rutaActiva.snapshot.params.id_estudiante;
        this.getEstudiante(this.id_estudiante);      
      }
      else{
        this.modoCreacion=true;  
      }
    }
  
    getEstudiante(id:string){
      this.miEstudianteService.getEstudiante(id).subscribe(
        data=>{
          this.estudiante = data;    
        }
      )
    }

    validarDatos():boolean{
      this.intentoEnvio = true;
      if (this.estudiante.cedula == '' || this.estudiante.nombre==''|| this.estudiante.apellido==''){
        return false;
      }
      else{
        return true;
      }
    }

    agregar():void{
      if(this.validarDatos()){
        this.intentoEnvio = true;
        this.miEstudianteService.agregar(this.estudiante).subscribe(
          data =>{
            Swal.fire({
              title:'Creando estudiante',
              text:'El estudiante se creó de manera correcta!',
              icon:'success'  
            });
            this.router.navigate(['pages/estudiantes/listar'])
          }
        )
      }
    }
    
    editar():void{
      if(this.validarDatos()){
        this.miEstudianteService.editar(this.estudiante._id,this.estudiante).subscribe(
          data =>{
            Swal.fire({
              title: 'Editando Estudiante',
              text:'El estudiante se actualizó de manera correcta',
              icon:'success'
            });
            this.router.navigate(['pages/estudiantes/listar'])
          }
        )
      }
    }

}
