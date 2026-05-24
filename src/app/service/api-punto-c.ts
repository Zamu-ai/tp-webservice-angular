import { HttpHeaders,HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
 providedIn: 'root'
})

export class ApiPuntoC{
     constructor(private http: HttpClient){}
    private urlSimbolos='https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols'
    private httpOptions={
        headers: new HttpHeaders({
            'x-rapidapi-key': '4afde7d825msh95e8605f232d5f3p1a41c0jsn12619fc8accb',
            'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
            'Content-Type': 'application/json'
        })
    }
    public getSimbolos(): Observable<any>{
        return this.http.get<any>(this.urlSimbolos,this.httpOptions)
    }

    public getCambios(monOri:string ,monChan: string, amount: number ): Observable<any>{
        return this.http.get<any>(`https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${monOri}&to=${monChan}&amount=${amount}`,this.httpOptions);
    }

}