import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, catchError, map, of, delay } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

    private apiUrl: string = 'https://restcountries.com/v3.1'


    constructor(private http: HttpClient) { }
    
    private getCountrieRequest( url:string): Observable<Country[]>{
        return this.http.get<Country[]>(url)
        .pipe(
            catchError(()=> of([])),
            
        );
    }

    searchCountryByAlphaCode( code : string): Observable<Country | null> {
        const url = `${this.apiUrl}/alpha/${code}`;
        return this.http.get<Country[]>(url)
        .pipe(
            map(countries => countries.length > 0 ? countries[0]: null),
            catchError(() => of(null)),
            
        );
    }
    searchCapital( term : string): Observable<Country[]>{
        const url = `${this.apiUrl}/capital/${term}`;
        return this.getCountrieRequest(url)
        ;
    }
    searchCountry( term : string): Observable<Country[]>{
        const url = `${this.apiUrl}/name/${term}`;
        return this.getCountrieRequest(url);

    }
    searchByRegion( region : string): Observable<Country[]>{
        const url = `${this.apiUrl}/region/${region}`;
        return this.getCountrieRequest(url);

    }
}