import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../../model/country';
import { CountryService } from '../../../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})

export class CountryListComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries(){
    this.countryService.getCountriesList().subscribe(data => {
      this.countries = data;
    });
  }

  saveCountry(){
    this.router.navigate(['create-country']);
  }

  updateCountry(countryId: number) {
    this.router.navigate(['update-country', countryId]);
  }

  deleteCountry(countryId: number){
    this.countryService.deleteCountry(countryId).subscribe( data => {
      console.log(data);
      this.getCountries();
    })
  }

}
