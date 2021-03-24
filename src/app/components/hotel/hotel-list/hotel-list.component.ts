import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../../../model/hotel';
import { HotelService } from '../../../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHotels();
  }

  private getHotels(){
    this.hotelService.getHotelsList().subscribe(data => {
      this.hotels= data;
    });
  }  

  saveHotel(){
    this.router.navigate(['create-hotel']);
  }

  updateHotel(hotelId: number){
    this.router.navigate(['update-hotel', hotelId]);
  }

  deleteHotel(hotelId: number){
    this.hotelService.deleteHotel(hotelId).subscribe( data => {
      console.log(data);
      this.getHotels();
    })
  }

}
