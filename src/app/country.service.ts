import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from './model/country';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  private baseURL = "http://localhost:8080/api/v1/countries";

  constructor(private httpClient: HttpClient) { }

  getCountriesList(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.baseURL}`);
  }

  createCountry(country: Country): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, country);
  }

  getCountryById(countryId: number): Observable<Country>{
    return this.httpClient.get<Country>(`${this.baseURL}/${countryId}`);
  }

  updateCountry(countryId: number, country: Country): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${countryId}`, country);
  }

  deleteCountry(countryId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${countryId}`);
  }


}
