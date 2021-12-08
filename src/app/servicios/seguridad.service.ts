import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdententificar } from '../modelos/identificar.modelos';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
   url = 'http://localhost3001'
  constructor(private http: HttpClient) { }

  identificar(usuario: string, clave: string): Observable<ModeloIdententificar>{
    return this.http.post<ModeloIdententificar>(`${this.url}/identificarPersona`,{
      usuario:usuario,
      clave:clave
    },{
      headers: new HttpHeaders({

      })
    })
  }

  ALmacenarSesion(datos:ModeloIdententificar){
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
  }

InformacionSesion(): any | undefined{
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
    }else{
      return null;
    }
}


EliminarInformacionSesion(): void{
  localStorage.removeItem("datosSesion");
}




}
