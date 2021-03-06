import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../model/hotel';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  id: number;
  hotel: Hotel = new Hotel();

  constructor(private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.hotelService.getHotelById(this.id).subscribe(data =>{
      this.hotel = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.hotelService.updateHotel(this.id, this.hotel).subscribe(data => {
    this.goToHotelList();
    }
    , error => console.log(error));    
  }

  goToHotelList(){
    this.router.navigate(['/hotels']);
  }

}
