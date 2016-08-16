import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { CITIES } from './mock-cities';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CityCardService {

  constructor(private http: Http){}

  getCities() {
    return Promise.resolve(CITIES);
  }

  getWeather(city: string){
    const open_weather = 'http://api.openweathermap.org/data/2.5/weather?q=';
    return this.http.get(open_weather + city + '&appid=13cb7fc7bbcbb873b6c84b9e84df4507').
      toPromise().then(response => response.json());
  }
}
