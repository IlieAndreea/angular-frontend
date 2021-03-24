import { Component, OnInit } from '@angular/core';
import { Country } from '../../../model/country';
import { CountryService } from '../../../country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrls: ['./update-country.component.css']
})
export class UpdateCountryComponent implements OnInit {

  id: number;
  country: Country = new Country();
  
  constructor(private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.countryService.getCountryById(this.id).subscribe(data =>{
      this.country = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.countryService.updateCountry(this.id, this.country).subscribe(data => {
    this.goToCountryList();
    }
    , error => console.log(error));    
  }

  goToCountryList(){
    this.router.navigate(['/countries']);
  }

}
