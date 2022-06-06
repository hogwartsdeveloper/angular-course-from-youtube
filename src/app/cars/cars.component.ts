import { Component } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;

  cars = [
    'Ford', 'Audi', 'BMW', 'Tesla', 'Ferrari', 'Porch'
  ];

  dates = [
    new Date(2015, 3, 4),
    new Date(2001, 8, 3),
    new Date(1998, 9, 19),
    new Date(2000, 6, 20),
  ]


  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
