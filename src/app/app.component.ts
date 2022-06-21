import {Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from "./cars.service";
import {AsyncValidatorFn, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";

export interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarsService]
})
export class AppComponent implements OnInit {
  colors = [
    "red",
    "blue",
    "green",
    "pink",
    "yellow",
    "grey"
  ]
  cars: Cars[] = [];
  carName: string = '';
  carColor: string = '';

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
  }

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((response: Cars[]) => {
      console.log(response);
      this.cars = response;
    })
  }

  addCar() {
    this.carsService
      .addCar(this.carName, this.carColor)
      .subscribe((response) => this.cars.push(response));
    this.carName = '';
    this.carColor = '';
  }

  getRandColor() {
    const randNum = Math.round(Math.random() * this.colors.length - 1);
    console.log(randNum)
    return this.colors[randNum];
  }

  setNewColor(id: number, name: string) {
    console.log(this.getRandColor())
    this.carsService
      .updateCar(id, name, this.getRandColor())
      .subscribe((res) => {
        console.log(res.id)
        this.cars = this.cars.map((c) => {
          if (c.id === res.id) {
            return res
          } else {
            return c
          }
        })
        console.log(this.cars)
      })
  }
}
