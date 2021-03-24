import { Component, OnInit } from '@angular/core';
import { Trip } from '../../../model/trip';
import { TripService } from '../../../trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/model/country';
import { City } from 'src/app/model/city';
import { CountryService } from 'src/app/country.service';
import { CityService } from 'src/app/city.service';

@Component({
  selector: 'app-update-trip', 
  templateUrl: './update-trip.component.html',
  styleUrls: ['./update-trip.component.css']
})
export class UpdateTripComponent implements OnInit {

  id: number;
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
    
    this.id = this.route.snapshot.params['id'];
    this.tripService.getTripById(this.id).subscribe(data =>{
      this.trip = data
    }, error => console.log(error));
  }

  onSubmit(){
    this.tripService.updateTrip(this.id, this.trip).subscribe(data => {
    this.goToTripList();
    }
    , error => console.log(error));    
  }

  goToTripList(){
    this.router.navigate(['/trips']);
  }
}
