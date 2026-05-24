import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiPuntoD } from "../../service/api-punto-d";

@Component({
    templateUrl:'./puntoD.html',
    styleUrl:'./puntoD.css',
    imports:[FormsModule,CommonModule]
 })
export class PuntoD{
    texto: string="";
    vozSeleccionada: string = "alloy" //entra por defecto esta voz despues la cambia en el html
    audioUrl: string='';
    vocesDisponibles=[
        {id: 'alloy',nombre: 'Alloy (Neutral)'},
        { id: 'echo', nombre: 'Echo (Masculino)' },
        { id: 'fable', nombre: 'Fable (Británico)' },
        { id: 'onyx', nombre: 'Onyx (Profundo)' },
        { id: 'nova', nombre: 'Nova (Femenino)' },
        { id: 'shimmer', nombre: 'Shimmer (Cálido)' }
    ];
    constructor(private apiAudios:ApiPuntoD, private detectorCambios: ChangeDetectorRef){}

     textoAvoz(){
          if (this.audioUrl) {
            URL.revokeObjectURL(this.audioUrl);
            this.audioUrl = '';
        }

        return this.apiAudios.getData(this.texto,this.vozSeleccionada).subscribe({
           next:(audioBlob) =>{
            console.log('Audio recibido:', audioBlob);
            this.audioUrl=URL.createObjectURL(audioBlob);
            this.detectorCambios.detectChanges()
           }
        })

    }
}