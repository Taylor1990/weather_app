import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { CityCardService } from './cityCard/cityCard.service';
import { Cities } from './cityCard/city';

@Component({
  selector: 'my-app',
  templateUrl: './src/app/app.component.html',
  styles: [String(require('./app.component.css'))],
  directives: [HeaderComponent],
  providers: [CityCardService]
})

export class AppComponent implements OnInit {
  cities: Cities[]

  constructor(private cityCardService: CityCardService) {}

  ngOnInit() {
    this.cityCardService.getCities().then(cities => this.cities = cities)
  }
}
