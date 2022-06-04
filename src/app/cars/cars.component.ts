import { Component } from '@angular/core';

@Component({
  selector: '.app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  addCarStatus = '';
  inputText = 'default text';

  constructor() {
  }

  addCar() {
    this.addCarStatus = 'Машина добавлена'
  }

  onKeyUp(event: any) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }
}
