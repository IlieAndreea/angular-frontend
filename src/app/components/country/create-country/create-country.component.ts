import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Country } from '../../../model/country';
import { CountryService } from '../../../country.service';
import { City } from 'src/app/model/city';
import { Trip } from 'src/app/model/trip';

@Component({
  selector: 'app-create-country',
  templateUrl: './create-country.component.html',
  styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent implements OnInit {

  country: Country = new Country();
  constructor(private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCountry(){
    this.countryService.createCountry(this.country).subscribe( data =>{
      console.log(data);
      this.goToCountryList();
    },
    error => console.log(error));
  }

  goToCountryList(){
    this.router.navigate(['/countries']);
  }

  onSubmit(){
    console.log(this.country);
    this.saveCountry();
  }

}
