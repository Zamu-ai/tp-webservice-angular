import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiPuntoC } from "../../service/api-punto-c";
@Component({
    templateUrl:'./puntoC.html',
    styleUrl:'./puntoC.css',
    imports:[FormsModule,CommonModule],
})
export class PuntoC{
     arrayCambios : string[]=[]
     montoConvertido:number=0
     monedaOrigen: string =""
     monedaResultante: string =""
      monto:number=1


    constructor(private apiConvertidor: ApiPuntoC, private cdr:ChangeDetectorRef){
    }
    ngOnInit(){
        this.traerSimbolos()
     }

        traerSimbolos(){
            this.apiConvertidor.getSimbolos().subscribe(simbolos=>{
                this.arrayCambios=Object.keys(simbolos.symbols)
                this.cdr.detectChanges()
            })
        }
        convertidorFunc(){
                this.apiConvertidor.getCambios(this.monedaOrigen,this.monedaResultante,this.monto).subscribe(moneda =>{
                    this.montoConvertido=moneda.result;
                })
        }
    

}