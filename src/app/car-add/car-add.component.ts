import {Component, OnInit } from '@angular/core';
import {CarsService} from "../services/cars.service";

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss'],
})
export class CarAddComponent implements OnInit {

  carName = '';

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
  }

  addCar() {
    this.carsService.addCar(this.carName)
    this.carName = ''
  }

}
