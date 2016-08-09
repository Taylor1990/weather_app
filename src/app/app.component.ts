import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component'

@Component({
  selector: 'my-app',
  templateUrl: './src/app/app.component.html',
  styles: [String(require('./app.component.css'))],
  directives: [HeaderComponent]
})

export class AppComponent { }
