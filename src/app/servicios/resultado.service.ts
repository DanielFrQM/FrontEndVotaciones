import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resultado } from '../modelos/resultado.model';
import { Usuario } from '../modelos/usuario.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  constructor(private http: HttpClient) { }
  listar(): Observable<Resultado[]>{
    return this.http.get<Resultado[]>(`${environment.url_api_gateway}/resultados`)
  }
  eliminar(id:string){
    return this.http.delete<Resultado>(`${environment.url_api_gateway}/resultados/${id}`)  
  }
  agregar(resultado:Resultado){
    return this.http.post(`${environment.url_api_gateway}/resultados`,resultado)
  }

  editar(id:string, resultado:Resultado){
    return this.http.put(`${environment.url_api_gateway}/resultados/${id}`,resultado)
  }

  getResultado(id:string): Observable<Resultado>{
    return this.http.get<Resultado>(`${environment.url_api_gateway}/resultados/${id}`)  
  }
}
