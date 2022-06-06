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


  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  setBigCarText(car: string): boolean {
    return car.length > 4
  }
}
