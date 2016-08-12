import {Component, Input, OnInit} from '@angular/core';
import {City} from './city';
import { CityCardService} from './cityCard.service';

@Component({
    selector: 'city-card',
    template: require('./cityCard.component.html'),
    styles: [String(require('./cityCard.component.css'))]
})

export class CityCardComponent implements OnInit {
    @Input()
    city: City;

    private temp: number;

    constructor(private cityCardService: CityCardService){}

    ngOnInit(){
        this.cityCardService.getTemperature(this.city.name).then(response => this.temp = Math.round(response.main.temp - 273.15));
    }
}
