import {Component, Input} from '@angular/core';
import {ICar} from "../cars/cars.component";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input('carItem') car: ICar | undefined;

  private carItem = false;
}
