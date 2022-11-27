import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from '../modelos/partido.model';
import { Usuario } from '../modelos/usuario.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(private http: HttpClient) { }
  listar(): Observable<Partido[]>{
    return this.http.get<Partido[]>(`${environment.url_api_gateway}/partidos`)
  }
  eliminar(id:string){
    return this.http.delete<Partido>(`${environment.url_api_gateway}/partidos/${id}`)  
  }
  agregar(partido:Partido){
    return this.http.post(`${environment.url_api_gateway}/partidos`,partido)
  }

  editar(id:string, partido:Partido){
    return this.http.put(`${environment.url_api_gateway}/partidos/${id}`,partido)
  }

  getPartido(id:string): Observable<Partido>{
    return this.http.get<Partido>(`${environment.url_api_gateway}/partidos/${id}`)  
  }
}

