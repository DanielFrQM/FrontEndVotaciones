import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Mesa } from "../modelos/mesa.model";
import { Usuario } from "../modelos/usuario.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MesaService {
  constructor(private http: HttpClient) {}
  listar(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(`${environment.url_api_gateway}/mesas`);
  }
  eliminar(id: string) {
    return this.http.delete<Mesa>(`${environment.url_api_gateway}/mesas/${id}`);
  }
  agregar(mesa: Mesa) {
    return this.http.post(`${environment.url_api_gateway}/mesas`, mesa);
  }

  editar(id: string, mesa: Mesa) {
    return this.http.put(`${environment.url_api_gateway}/mesas/${id}`, mesa);
  }

  getMesa(id: string): Observable<Mesa> {
    return this.http.get<Mesa>(`${environment.url_api_gateway}/mesas/${id}`);
  }
}
