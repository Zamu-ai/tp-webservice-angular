import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class ApiPuntoE{
    private urlJikanApi='https://api.jikan.moe/v4'
    constructor(private http:HttpClient){
    } 
    // Obtener animes populares (los 15 más conocidos)
    getAnimesPopulares(): Observable<any> {
        return this.http.get(`${this.urlJikanApi}/top/anime?limit=15`);
    }

    // Obtener mangas populares (los 15 más conocidos)
    getMangasPopulares(): Observable<any> {
        return this.http.get(`${this.urlJikanApi}/top/manga?limit=15`);
    }

    // Buscar anime por nombre
    buscarAnime(termino: string): Observable<any> {
        return this.http.get(`${this.urlJikanApi}/anime?q=${termino}&limit=20`);
    }

    // Buscar manga por nombre
    buscarManga(termino: string): Observable<any> {
        return this.http.get(`${this.urlJikanApi}/manga?q=${termino}&limit=20`);
    }

    // Obtener detalles de un anime específico (para el modal)
    getDetalleAnime(id: number): Observable<any> {
        return this.http.get(`${this.urlJikanApi}/anime/${id}/full`);
    }

    // Obtener detalles de un manga específico (para el modal)
    getDetalleManga(id: number): Observable<any> {
        return this.http.get(`${this.urlJikanApi}/manga/${id}/full`);
    }


}