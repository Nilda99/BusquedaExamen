import {Component} from '@angular/core';
import {BusquedaService} from '../../servicios/busqueda.service';
import {Value} from '../../modelos/busqueda';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    values: Value[] = [];
    textSuccess: string;

    constructor(public  busquedaServicio: BusquedaService) {
    }

    corrector(eevent: any) {
        console.log(eevent.target.value);
        this.busquedaServicio.correctorOrtografico(eevent.target.value).subscribe(data => {
            // this.values = data.value;
            this.textSuccess = data.error.text;
            console.log(data);
        }, error => {
            this.textSuccess = error.error.text;
            console.log(error);
        });
    }
}
