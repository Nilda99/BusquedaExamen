import {Component, ViewChild} from '@angular/core';
import {Value} from 'src/app/modelos/busqueda';
import {BusquedaService} from '../../servicios/busqueda.service';
import {IonInfiniteScroll} from '@ionic/angular';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    @ViewChild(IonInfiniteScroll) infitniteScroll: IonInfiniteScroll;
    values: Value[] = [];
    totalPagina: number;
    texto: string;
    constructor(public busquedaServicio: BusquedaService) {
        this.totalPagina = 5;
    }


    buscarTexto(eevent: any) {
        console.log(eevent.target.value);
        this.texto = eevent.target.value;
        this.values = [];
        this.busquedaServicio.buscar(this.totalPagina, eevent.target.value).subscribe(data => {
            this.values = data.value;
            console.log(data);
        });
    }

// INDINITSCROLL
    cargarDato(event: any) {
        console.log('Cargando siguiente....');

        this.totalPagina += 5;
        this.busquedaServicio.buscar(this.totalPagina, this.texto).subscribe(data => {
            this.values = data.value;
            event.target.complete();
            console.log(data);
        });
        // setTimeout(() => {
        //     if (this.values.length > 50) {
        //         event.target.complete();
        //         this.infitniteScroll.disabled = true;
        //         return;
        //     }
        //     // const nuevoArr = Array(10);
        //     // this.values.push(...nuevoArr);
        //     event.target.complete();
        // }, 100);
    }
}
