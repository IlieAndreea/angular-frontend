import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'; 
import { Trip } from './model/trip';

@Injectable({
  providedIn: 'root'
})

export class TripService {

  private baseURL = "http://localhost:8080/api/v1/trips"; 

  constructor(private httpClient: HttpClient) { }

  getTripsList(): Observable<Trip[]>{
    return this.httpClient.get<Trip[]>(`${this.baseURL}`);
  }

  createTrip(trip: Trip): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, trip);
  }

  getTripById(tripId: number): Observable<Trip>{
    return this.httpClient.get<Trip>(`${this.baseURL}/${tripId}`);
  }

  updateTrip(tripId: number, trip: Trip): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${tripId}`, trip);
  }

  deleteTrip(tripId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${tripId}`);
  }
}
