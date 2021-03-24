import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'; 
import { Hotel } from './model/hotel';

@Injectable({
  providedIn: 'root'
})

export class HotelService {

  private baseURL = "http://localhost:8080/api/v1/hotels";

  constructor(private httpClient: HttpClient) { }

  getHotelsList(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}`);
  }

  createHotel(hotel: Hotel): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, hotel);
  }

  getHotelById(hotelId: number): Observable<Hotel>{
    return this.httpClient.get<Hotel>(`${this.baseURL}/${hotelId}`);
  }

  updateHotel(hotelId: number, hotel: Hotel): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${hotelId}`, hotel);
  }

  deleteHotel(hotelId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${hotelId}`);
  }
}
