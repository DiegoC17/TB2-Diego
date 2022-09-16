import { Historial } from './../model/historial';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  url: string = "http://localhost:5000/historial"
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Historial[]>(this.url);
  }
}
