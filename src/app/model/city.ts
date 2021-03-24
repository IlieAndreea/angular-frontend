import { Country } from "./country";
import { Trip } from "./trip";

export class City {
    cityId: number;
    cityName: string;
    country: Country;
    trips: Trip;
}
