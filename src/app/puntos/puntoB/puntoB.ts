import {ChangeDetectorRef, Component} from '@angular/core';
import { ApiPuntoB } from '../../service/api-punto-b';
import {CommonModule} from '@angular/common'
declare var bootstrap:any
@Component({
    templateUrl:'./puntoB.html',
      imports:[CommonModule],
})

export class PuntoB{
data: any[]=[];
autosMarcaSeleccionado: any[]=[];
nombreMarcaSeleccionada: string='';
  constructor(private apiMarcas: ApiPuntoB, private cdr : ChangeDetectorRef){}
    ngOnInit(): void{
        this.llenarData();
    }
 
    llenarData(){
        this.apiMarcas.getDatosMarca().subscribe(infoMarcas =>{
            this.data=infoMarcas.brands;
            this.cdr.detectChanges();
        })
    }

    mostrarMarca(id: string){
        this.apiMarcas.getBuscarXMarca(id).subscribe(allMarcas =>{
           
            this.autosMarcaSeleccionado=allMarcas.models;
            const marcaEncontrada=this.data.find(m=> m.id==id) //busco si existe el nombre de la marca mediante el id
            this.nombreMarcaSeleccionada= marcaEncontrada? marcaEncontrada.name : id //si existe le asigno el nombre asi saber en el modal sino le dejo el id
            
            this.cdr.detectChanges();
            const modalMarcasAutos= bootstrap.Modal.getOrCreateInstance(
                document.getElementById('modalModelosAutos')
            )
            modalMarcasAutos.show();
        })    


    }

}