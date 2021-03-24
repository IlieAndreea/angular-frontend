import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './model/city';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  private baseURL = "http://localhost:8080/api/v1/cities"; 

  constructor(private httpClient: HttpClient) { }

  getCitiesList(): Observable<City[]> {
    return this.httpClient.get<City[]>(`${this.baseURL}`);
  }

  createCity(city: City): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, city);
  }

  getCityById(cityId: number): Observable<City>{
    return this.httpClient.get<City>(`${this.baseURL}/${cityId}`);
  }

  updateCity(cityId: number, city: City): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${cityId}`, city);
  }

  deleteCity(cityId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${cityId}`);
  }
}
