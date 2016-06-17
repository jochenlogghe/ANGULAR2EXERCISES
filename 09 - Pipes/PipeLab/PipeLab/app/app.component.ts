import {Component} from 'angular2/core';
import {TemperaturePipe} from './temperature.pipe';

@Component({
  selector: 'my-app',
  template: `
      <p>{{ 300 | temperature:'celsius':3}}</p>
      <p>{{ 300 | temperature:'fahrenheit':2}}</p>
      <p>{{ 300 | temperature}}</p>
  `,
  pipes: [TemperaturePipe]
})
export class AppComponent { }
