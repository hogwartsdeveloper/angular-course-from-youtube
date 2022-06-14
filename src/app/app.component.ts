import { Component } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchCar: string = '';
  cars = [
    {name: 'Ford', descr: 'WFM 1'},
    {name: 'Mazda', descr: 'WFM 2'},
    {name: 'Tesla', descr: 'WFM 3'},
    {name: 'Audi', descr: 'WFM 4'},
    {name: 'Mercedes', descr: 'WFM 5'},
    {name: 'BMW', descr: 'WFM 6'}
  ]

  title: string = '';

  asyncTitle = of('Async Title 3 seconds').pipe(delay(3000));

  addCar() {
    this.cars.push({
      name: 'New Car',
      descr: 'WFM'
    })
  }
}
