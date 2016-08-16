import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { CityCardService } from './cityCard/cityCard.service';
import { City } from './cityCard/city';
import { CityCardComponent} from './cityCard/cityCard.component';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'my-app',
  templateUrl: './src/app/app.component.html',
  styles: [String(require('./app.component.css'))],
  directives: [HeaderComponent, CityCardComponent, MODAL_DIRECTIVES],
  providers: [CityCardService]
})

export class AppComponent implements OnInit {
  cities: City[]

  constructor(private cityCardService: CityCardService) {}

  ngOnInit() {
    this.cityCardService.getCities().then(cities => {
      this.cities = cities;

      for(let i = 0; i < cities.length; i++){
        this.cityCardService.getWeather(cities[i].name).then(response => {
          this.cities[i].humidity = response.main.humidity;
          this.cities[i].pressure = response.main.pressure;
          this.cities[i].temp = Math.round(response.main.temp - 273.15);
          this.cities[i].temp_max = Math.round(response.main.temp_max - 273.15);
          this.cities[i].temp_min = Math.round(response.main.temp_min - 273.15);
          this.cities[i].clouds = response.weather[0].main;
          this.cities[i].wind = response.wind.speed;
        })
      }
    })
  }

  onClick(modal: ModalComponent){
    modal.open();
  }
}
