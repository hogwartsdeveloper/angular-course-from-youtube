import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  carName: string = 'Ford';
  carYear: number = 2017;

  getName(): string {
    return this.carName
  }
}
