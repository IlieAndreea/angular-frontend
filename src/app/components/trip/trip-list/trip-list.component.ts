import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../../../model/trip';
import { TripService } from '../../../trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})

export class TripListComponent implements OnInit {
  
  trips: Trip[];

  constructor(private tripService: TripService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTrips();   
  }

  private getTrips(){
    this.tripService.getTripsList().subscribe(data => {
      this.trips= data;
    });
  }  

  saveTrip(){
    this.router.navigate(['create-trip']);
  }

  updateTrip(tripId: number){
    this.router.navigate(['update-trip', tripId]);
  }

  deleteTrip(tripId: number){
    this.tripService.deleteTrip(tripId).subscribe( data => {
      console.log(data);
      this.getTrips();
    })
  }
}

