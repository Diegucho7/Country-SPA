import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { CountriesModule } from '../../countries.module';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export default class CountryPageComponent implements OnInit {

  constructor (
     private activatedRoute: ActivatedRoute,
     private countriesService: CountriesService
     ){}
  
  
  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( ({id}) =>{
      
      this.countriesService.searchCountryByAlphaCode(id)
      .subscribe(country => {
        console.log({country})
      });

    });
  }

  
}
