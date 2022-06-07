import {Component, ViewEncapsulation} from '@angular/core';

export interface ICar {
  name: string,
  year: number
}

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CarsComponent {


  cars: ICar[] = [
    {
      name: 'Tesla',
      year: 2019
    },
    {
      name: 'Ford',
      year: 2021
    },
    {
      name: 'Mazda',
      year: 2013
    }
  ]

  addCarStatus = false;


  dates = [
    new Date(2015, 3, 4),
    new Date(2001, 8, 3),
    new Date(1998, 9, 19),
    new Date(2000, 6, 20),
  ]


  constructor() {
  }

  updateCarList(car: ICar) {
    this.cars.push(car)
  }
}
