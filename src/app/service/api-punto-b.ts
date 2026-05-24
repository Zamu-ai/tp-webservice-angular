import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class ApiPuntoB{
    private urlMarcas= 'https://cars-database-with-image.p.rapidapi.com/api/brands';
    constructor(private http: HttpClient){ }
    private httpOptions={ //variable privada de tipo objeto  que contiene :
    headers: new HttpHeaders({ //headers variable no se le puede cambiarelnombre creo clase new httpheaders con las cabeceras pa que funcione mi api
        'x-rapidapi-key':'4afde7d825msh95e8605f232d5f3p1a41c0jsn12619fc8accb',
        'x-rapidapi-host':'cars-database-with-image.p.rapidapi.com',
        'Content-Type': 'application/json'
    })}

public getDatosMarca(): Observable<any>{
    return this.http.get<any>(this.urlMarcas,this.httpOptions);
}


public getBuscarXMarca(id: string): Observable<any>{
    return this.http.get<any>(`https://cars-database-with-image.p.rapidapi.com/api/models/${id}`,this.httpOptions)

}

    
}