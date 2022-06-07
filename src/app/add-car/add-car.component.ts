import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ICar} from "../cars/cars.component";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  carName = '';
  carYear = 2019;
  @Output('onAddCar') carEmitter = new EventEmitter<ICar>();

  constructor() { }

  ngOnInit(): void {
  }

  addCar() {
    this.carEmitter.emit({
      name: this.carName,
      year: this.carYear
    });

    this.carName = '';
    this.carYear = 2017;
  }

}
