import {Component} from '@angular/core';
import {Value} from 'src/app/modelos/busqueda';
import {BusquedaService} from '../../servicios/busqueda.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    values: Value[] = [];

    constructor(public busquedaServicio: BusquedaService) {

    }


    buscarTexto(eevent: any) {
        console.log(eevent.target.value);
        this.busquedaServicio.buscar(eevent.target.value).subscribe(data => {
            this.values = data.value;
            console.log(data);
        });
    }
}
