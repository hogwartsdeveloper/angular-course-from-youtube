import { Component } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {ICar} from "./cars/cars.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchCar: string = '';
  cars: ICar[] = [
    {name: 'Tesla', isSold: false},
    {name: 'Tulpar', isSold: true},
  ]

  title: string = '';

  asyncTitle = of('Async Title 3 seconds').pipe(delay(3000));


  addCarToList(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    })
  }
}
