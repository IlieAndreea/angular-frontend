import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { City } from '../../../model/city';
import { CityService } from '../../../city.service';
import { Country } from 'src/app/model/country';
import { Trip } from 'src/app/model/trip';

@Component({
  selector: 'app-create-city',
  templateUrl: './create-city.component.html',
  styleUrls: ['./create-city.component.css']
})
export class CreateCityComponent implements OnInit {

  city: City = new City();

  constructor(private cityService: CityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveCity(){
    this.cityService.createCity(this.city).subscribe( data =>{
      console.log(data);
      this.goToCityList();
    },
    error => console.log(error));
  }

  goToCityList(){
    this.router.navigate(['/cities']);
  }

  onSubmit(){
    console.log(this.city);
    this.saveCity();
  }

}
