import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Respuesta} from '../modelos/busqueda';

@Injectable({
    providedIn: 'root'
})
export class BusquedaService {
    private baseUrl = environment.url;
    '/spelling/AutoComplete?text=do';
    params = new HttpHeaders();

    constructor(public httpClient: HttpClient) {
        this.params.set('x-rapidapi-key', environment.apikey);

        this.params.set('x-rapidapi-host', environment.host);

    }

    buscar(texto?: string): Observable<Respuesta> {
        return this.httpClient.get<Respuesta>(this.baseUrl + `/Search/ImageSearchAPI?pageNumber=1&pageSize=10&q=${texto}&autoCorrect=true`,
            {
                headers: {
                    'x-rapidapi-key': environment.apikey,
                    'x-rapidapi-host': environment.host
                }
            });
    }

    correctorOrtografico(texto?: string): Observable<any> {
        console.log(this.baseUrl);
        return this.httpClient.get<any>(this.baseUrl + `/spelling/SpellCheck?text=${texto} `,
            {
                headers: {
                    'x-rapidapi-key': environment.apikey,
                    'x-rapidapi-host': environment.host
                }
            }
        );
    }
}
