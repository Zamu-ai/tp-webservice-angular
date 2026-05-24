import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiPuntoA {
  private urlpelicula = 'https://imdb-top-100-movies.p.rapidapi.com/'; //defino variable privada urlpelicula donde está la Url del servicio
  constructor(private http: HttpClient){   //defino constructor con la variable privada http de tipo HttpClient con esto voy a hacer peticiones al servicio
  } 
  public getData(): Observable<any>{ //funcion llamada getData devuelve un observable de cualquier tipo, para pedir datos al servicio
    let opcioneshttp={
        headers: new HttpHeaders({
      'x-rapidapi-key':'4afde7d825msh95e8605f232d5f3p1a41c0jsn12619fc8accb',
          'x-rapidapi-host':'imdb-top-100-movies.p.rapidapi.com',
      'Content-Type':'application/json'
        })
    }
    
    return this.http.get<any>(this.urlpelicula,opcioneshttp);
  }
}
