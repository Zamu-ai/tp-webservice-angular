import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
providedIn:'root'
})
export class ApiPuntoD{
    private urlAudio='https://open-ai-text-to-speech1.p.rapidapi.com/';

    constructor(private http:HttpClient){}

    public getData(texto: string,voz: string): Observable<any>{
        let httpOptions={
            headers: new HttpHeaders({
                'x-rapidapi-key':'4afde7d825msh95e8605f232d5f3p1a41c0jsn12619fc8accb',
                'x-rapidapi-host': 'open-ai-text-to-speech1.p.rapidapi.com',
                'Content-Type': 'application/json'
            }),
            responseType: 'blob' as 'json'
        }
        let body={
                     model: 'tts-1',
                    input: texto,
                    instructions: 'Speak in a lively and optimistic tone.',
                    voice: voz
        }
        console.log("enviando peticion a la api...")
        return this.http.post<Blob>(this.urlAudio,body,httpOptions)
    }
}