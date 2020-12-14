import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {IonicModule} from '@ionic/angular';
import {CardComponent} from './card/card.component';
import {ListaBusquedaComponent} from './lista-busqueda/lista-busqueda.component';


@NgModule({
    declarations: [
        HeaderComponent,
        CardComponent,
        ListaBusquedaComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        HeaderComponent,
        CardComponent,
        ListaBusquedaComponent
    ]

})
export class ComponentesModule {
}
