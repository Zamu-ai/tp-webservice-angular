import {ChangeDetectorRef, Component} from '@angular/core';
import { ApiPuntoA } from '../../service/api-punto-a';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-puntoA',
    templateUrl: './puntoA.html',
    imports:[CommonModule],
})

export class PuntoA{
 data: any[] = []
 constructor(private apiPelicula: ApiPuntoA,private cdr: ChangeDetectorRef){}
    ngOnInit():void {
    this.llenarData();
        }
    
 llenarData(){
            this.apiPelicula.getData().subscribe(data =>{
                this.data=data;
                this.cdr.detectChanges();
            })
                }
}
