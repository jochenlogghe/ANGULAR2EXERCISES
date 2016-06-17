import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
  name: 'temperature'
})
// The work of the pipe is handled in the tranform method with our pipe's class
export class TemperaturePipe implements PipeTransform {
  transform(value: number, type: string, places: number) {
    if (typeof value !== 'number') { return; }

    type= type || 'kelvin';
    places = places || 2;

    if (type === 'celsius') {
      let temp = value - 273.15;
      return `${temp.toFixed(places)}°C`;
    } else if (type === 'fahrenheit') {
      var temp = (value * 9 / 5) - 459.67;
      return `${temp.toFixed(places)}°F`;
    } else { /*Kelvin*/
      return `${value.toFixed(places)}K`;
    }

  }
}