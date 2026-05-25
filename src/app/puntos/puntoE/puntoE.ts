import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiPuntoE } from "../../service/api-punto-e";
import { ChangeDetectorRef } from "@angular/core";

declare var bootstrap:any;

@Component({
    templateUrl:'./puntoE.html',
    styleUrl:'./puntoE.css',
    imports:[FormsModule,CommonModule]
})
export class PuntoE{
    tipoSeleccionado: string = 'anime'; // 'anime' o 'manga'
    listaItems: any[] = [];              // Lista de animes o mangas
    terminoBusqueda: string = '';
    
    // Variables para el modal
    itemSeleccionado: any = null;
    cargandoDetalle: boolean = false;
    
    // Nombres de categorías
    categorias = [
        { id: 'anime', nombre: 'Animes' },
        { id: 'manga', nombre: 'Mangas' }
    ];

    constructor( private apiJikan: ApiPuntoE,    private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.cargarPopulares();
    }

    cargarPopulares() {
         this.terminoBusqueda = '';
        
        if (this.tipoSeleccionado === 'anime') {
            this.apiJikan.getAnimesPopulares().subscribe(respuesta => {
                this.listaItems = respuesta.data;
                this.cdr.detectChanges();
            });
        } else {
            this.apiJikan.getMangasPopulares().subscribe(respuesta => {
                this.listaItems = respuesta.data;
                this.cdr.detectChanges();
            });
        }
    }

    buscar() {
        if (!this.terminoBusqueda.trim()) {
            this.cargarPopulares();
            return;
        }
        
        
        
        if (this.tipoSeleccionado === 'anime') {
            this.apiJikan.buscarAnime(this.terminoBusqueda).subscribe(respuesta => {
                this.listaItems = respuesta.data;
                 
                this.cdr.detectChanges();
            });
        } else {
            this.apiJikan.buscarManga(this.terminoBusqueda).subscribe(respuesta => {
                this.listaItems = respuesta.data;
                 this.cdr.detectChanges();
            });
        }
    }

    verDetalle(id: number) {
        this.cargandoDetalle = true;
        
        if (this.tipoSeleccionado === 'anime') {
            this.apiJikan.getDetalleAnime(id).subscribe(respuesta => {
                this.itemSeleccionado = respuesta.data;
                this.cargandoDetalle = false;
                this.cdr.detectChanges();
                this.abrirModal();
            });
        } else {
            this.apiJikan.getDetalleManga(id).subscribe(respuesta => {
                this.itemSeleccionado = respuesta.data;
                this.cargandoDetalle = false;
                this.cdr.detectChanges();
                this.abrirModal();
            });
        }
    }

    abrirModal() {
        const modalElement = document.getElementById('modalDetalle');
        if (modalElement) {
            const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
            modal.show();
        }
    }

    cambiarTipo(tipo: string) {
        this.tipoSeleccionado = tipo;
        this.cargarPopulares();
    }
}