import { Injectable } from '@angular/core';
import { CITIES } from './mock-cities';

@Injectable()
export class CityCardService {
  getCities() {
    return Promise.resolve(CITIES);
  }
}
