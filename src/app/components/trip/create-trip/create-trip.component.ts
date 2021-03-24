import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { CityService } from 'src/app/city.service';
import { CountryService } from 'src/app/country.service';
import { City } from 'src/app/model/city';
import { Country } from 'src/app/model/country';
import { Trip } from '../../../model/trip';
import { TripService } from '../../../trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})
export class CreateTripComponent implements OnInit {   

  trip: Trip = new Trip();
  country: Country = new Country();
  city: City = new City();

  constructor(private tripService: TripService,
    private countryService: CountryService,
    private cityService: CityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.country=new Country();
    this.city=new City();
  }

  saveTrip(){
    this.tripService.createTrip(this.trip).subscribe( data =>{
      console.log(data);
      this.goToTripList();
    },
    error => console.log(error));
  }

  goToTripList(){
    this.router.navigate(['/trips']);
  }

  onSubmit(){
    console.log(this.trip);
    this.saveTrip();
  }
}
