import { Component, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

    public countries: Country[]= [];

    constructor (private countriesService: CountriesService){}
    
  searchByCapital (term: string):void{
    this.countriesService.searchCapital(term)
    .subscribe(countries => {
      this.countries = countries;
    })
  }

    searchCountry (code: string){
      this.countriesService.searchCountryByAlphaCode(code)
      .subscribe( country => {
        console.log({country})
      }); 
    }

}
