import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { CityCardService } from './cityCard/cityCard.service';
import { City } from './cityCard/city';
import { CityCardComponent} from './cityCard/cityCard.component'

@Component({
  selector: 'my-app',
  templateUrl: './src/app/app.component.html',
  styles: [String(require('./app.component.css'))],
  directives: [HeaderComponent, CityCardComponent],
  providers: [CityCardService]
})

export class AppComponent implements OnInit {
  cities: City[]

  constructor(private cityCardService: CityCardService) {}

  ngOnInit() {
    this.cityCardService.getCities().then(cities => this.cities = cities)
  }
}
