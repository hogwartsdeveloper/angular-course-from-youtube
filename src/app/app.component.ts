import {Component, OnInit} from '@angular/core';
import {ICar} from "./cars/cars.component";
import {CarsService} from "./services/cars.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarsService]
})
export class AppComponent implements OnInit {
  cars: ICar[] = [];

  constructor(private carService: CarsService) {
  }

  ngOnInit() {
    this.cars = this.carService.cars;
  }
}
