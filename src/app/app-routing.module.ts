import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { CreateCityComponent } from './components/city/create-city/create-city.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CountryListComponent } from './components/country/country-list/country-list.component';
import { CreateCountryComponent } from './components/country/create-country/create-country.component';
import { HomeComponent } from './components/home/home.component';
import { CreateTripComponent } from './components/trip/create-trip/create-trip.component';
import { TripListComponent } from './components/trip/trip-list/trip-list.component';
import { UpdateTripComponent } from './components/trip/update-trip/update-trip.component';
import { BaliComponent } from './offers/bali/bali.component';
import { DolomitesComponent } from './offers/dolomites/dolomites.component';
import { GullfossComponent } from './offers/gullfoss/gullfoss.component';


const routes: Routes = [
  {path: 'trips', component: TripListComponent},
  {path: 'create-trip', component: CreateTripComponent},
  // {path:'', redirectTo:'trips',pathMatch: 'full'},
  {path:'update-trip/:id', component: UpdateTripComponent},  
  {path: '', component: HomeComponent},
  // {path:'', redirectTo:'home',pathMatch: 'full'},
  {path:'create-country', component:CreateCountryComponent},
  {path:'create-city', component:CreateCityComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'bali', component:BaliComponent},
  {path:'dolomites', component:DolomitesComponent},
  {path:'gullfoss', component:GullfossComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
