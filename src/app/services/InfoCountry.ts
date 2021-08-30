import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../modules/country/Country'
import { catchError, tap } from 'rxjs/operators'

@Injectable()
export class InfoCountryService {
    private _API_KEY = '7301d8ccd16b74c80a2eb24492c5ee67'
    private _API_COUNTRY = `https://api.themoviedb.org/3/configuration/countries?api_key=${this._API_KEY}`

    constructor(private http: HttpClient) { }

    getInfoCountry(): Observable<Country[]> {
        return this.http.get<Country[]>(this._API_COUNTRY).pipe(
            //success
            tap(receivedCountries => console.log(`receivedCountries = ${JSON.stringify(receivedCountries)}`)),
            //error
            catchError(error => of ([]))
        );
    };
}
