import {Component, ViewEncapsulation} from '@angular/core';

export interface ICar {
  name: string,
  isSold: boolean
}

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CarsComponent {

  addCarStatus = false;


  dates = [
    new Date(2015, 3, 4),
    new Date(2001, 8, 3),
    new Date(1998, 9, 19),
    new Date(2000, 6, 20),
  ]


  constructor() {
  }
}
