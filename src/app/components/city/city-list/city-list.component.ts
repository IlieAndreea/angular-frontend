import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City} from '../../../model/city';
import { CityService } from '../../../city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})

export class CityListComponent implements OnInit {

  cities: City[];

  constructor(private cityService: CityService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCities();
  }

  private getCities(){
    this.cityService.getCitiesList().subscribe(data => {
      this.cities = data;
    });
  }

  saveCity(){
    this.router.navigate(['create-city']);
  }

  updateCity(cityId: number) {
    this.router.navigate(['update-city', cityId]);
  }

  deleteCity(cityId: number){
    this.cityService.deleteCity(cityId).subscribe( data => {
      console.log(data);
      this.getCities();
    })
  }
}
