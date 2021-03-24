import { City } from "./city";

export class Trip {
    tripId: number;
    transportation: string;
    departureMonth: string;
    departureDate: Date;
    hotel: string;
    numberNights: number;
    tripPrice: number;
    tripCurrency: string;
    cityTrip: City;
}

