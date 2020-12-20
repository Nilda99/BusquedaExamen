import {Component} from '@angular/core';
import {Value} from '../../modelos/busqueda';
import {BusquedaService} from '../../servicios/busqueda.service';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  values: Value[] = [];
  textSuccess: string;
  name: string;

  public keyUp = new Subject<string>(); // creando un observable de tipo subject

  constructor(public  busquedaServicio: BusquedaService) {

    const subscription = this.keyUp.pipe(
        map((event: any) => event.target.value), // extraemos  el valor de input
        debounceTime(400), // espera 400 ms antes de enviar  la peticion
        distinctUntilChanged(), // comprueba que el valor aya cambiado
        // flatMap(search => of(search).pipe(delay(200)))
    ).subscribe(res => {
      console.log(res);
      this.busquedaServicio.autoComlete(res).subscribe(data => {
        this.values = data;
        // this.textSuccess = data.error.text;
        console.log(data);
      }, error => {
        // this.textSuccess = error.error.text;
        console.log(error);
      });
    });
  }


  Comlete(eevent: any) {
    console.log(eevent.target.value);
    this.busquedaServicio.autoComlete(eevent.target.value).subscribe(data => {
      this.values = data;
      // this.textSuccess = data.error.text;
      console.log(data);
    }, error => {
      // this.textSuccess = error.error.text;
      console.log(error);
    });
  }
}
