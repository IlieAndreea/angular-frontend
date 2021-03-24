import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { TripListComponent } from './components/trip/trip-list/trip-list.component';
import { HomeComponent } from './components/home/home.component';
import { CreateTripComponent } from './components/trip/create-trip/create-trip.component';
import { FormsModule } from '@angular/forms';
import { UpdateTripComponent } from './components/trip/update-trip/update-trip.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { CreateCityComponent } from './components/city/create-city/create-city.component';
import { UpdateCityComponent } from './components/city/update-city/update-city.component';
import { CreateCountryComponent } from './components/country/create-country/create-country.component';
import { UpdateCountryComponent } from './components/country/update-country/update-country.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HotelListComponent } from './components/hotel/hotel-list/hotel-list.component';
import { CreateHotelComponent } from './components/hotel/create-hotel/create-hotel.component';
import { UpdateHotelComponent } from './components/hotel/update-hotel/update-hotel.component';
import { BaliComponent } from './offers/bali/bali.component';
import { DolomitesComponent } from './offers/dolomites/dolomites.component';
import { GullfossComponent } from './offers/gullfoss/gullfoss.component';



@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    TripListComponent,
    HomeComponent,
    CreateTripComponent,
    UpdateTripComponent,
    CityListComponent,
    CreateCityComponent,
    UpdateCityComponent,
    CreateCountryComponent,
    UpdateCountryComponent,
    AboutUsComponent,
    ContactUsComponent,
    HotelListComponent,
    CreateHotelComponent,
    UpdateHotelComponent,
    BaliComponent,
    DolomitesComponent,
    GullfossComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
