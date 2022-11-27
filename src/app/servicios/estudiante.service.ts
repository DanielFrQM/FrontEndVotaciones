import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../modelos/estudiante.model';
import { Usuario } from '../modelos/usuario.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }
  listar(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(`${environment.url_api_gateway}/estudiantes`)
  }
  eliminar(id:string){
    return this.http.delete<Estudiante>(`${environment.url_api_gateway}/estudiantes/${id}`)  
  }
  agregar(estudiante:Estudiante){
    return this.http.post(`${environment.url_api_gateway}/estudiantes`,estudiante)
  }

  editar(id:string, estudiante:Estudiante){
    return this.http.put(`${environment.url_api_gateway}/estudiantes/${id}`,estudiante)
  }

  getEstudiante(id:string): Observable<Estudiante>{
    return this.http.get<Estudiante>(`${environment.url_api_gateway}/estudiantes/${id}`)  
  }
}
