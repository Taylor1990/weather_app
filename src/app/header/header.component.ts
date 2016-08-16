import {Component} from '@angular/core';

@Component({
  selector: 'my-header',
  template: require('./header.component.html'),
  styles: [String(require('./header.component.css'))]
})

export class HeaderComponent {

}
