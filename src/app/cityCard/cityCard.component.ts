import {Component, Input} from '@angular/core';
import {City} from './city';

@Component({
    selector: 'city-card',
    template: require('./cityCard.component.html'),
    styles: [String(require('./cityCard.component.css'))]
})

export class CityCardComponent {
    @Input()
    city: City
}
