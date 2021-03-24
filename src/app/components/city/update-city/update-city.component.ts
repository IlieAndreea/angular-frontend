import { Component, OnInit } from '@angular/core';
import { City } from '../../../model/city';
import { CityService } from '../../../city.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css']
})
export class UpdateCityComponent implements OnInit {

  id: number;
  city: City = new City();
  constructor(private cityService: CityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cityService.getCityById(this.id).subscribe(data =>{
      this.city = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.cityService.updateCity(this.id, this.city).subscribe(data => {
    this.goToCityList();
    }
    , error => console.log(error));    
  }

  goToCityList(){
    this.router.navigate(['/cities']);
  }


} 
