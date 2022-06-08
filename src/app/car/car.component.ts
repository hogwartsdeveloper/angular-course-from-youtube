import {AfterViewInit, Component, ContentChild, ElementRef, Input, ViewChild} from '@angular/core';
import {ICar} from "../cars/cars.component";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements AfterViewInit{
  @Input('carItem') car: ICar | undefined;
  @ContentChild('carHeading') carHeading: ElementRef | undefined;

  private carItem = false;

  constructor() {

  }

  ngAfterViewInit() {
    console.log(this.carHeading)
  }
}
