import {Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from "./cars.service";
import {AsyncValidatorFn, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpResponse} from "@angular/common/http";
import {catchError, of, throwError} from "rxjs";

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
  error: boolean = false;
  errorText: string = '';

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
    }, (err) => {
        this.error = true;
        this.errorText = err
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
    this.carsService
      .updateCar(id, name, this.getRandColor())
      .subscribe((res) => {
        this.cars = this.cars.map((c) => {
          if (c.id === res.id) {
            return res
          } else {
            return c
          }
        })
      })
  }

  deleteCar(car: Cars) {
    this.carsService
      .delete(car)
      .subscribe((res) => {
        console.log('eeerr: ', res);
      }, err => {
        console.log('eee: ', err);
        this.error = true;
        this.errorText = err
      })
      // .subscribe((
      //   (res) => {
      //     console.log('eeerr: ', res);
      //   this.cars = this.cars.filter((c) => c.id !== res.id);
      //
      // }),
      //   ((err) => {
      //     console.log('eee: ', err);
      //     this.error = true;
      //     this.errorText = err
      //     console.log(this.errorText);
      //     console.log(this.error)
      //   }))
  }
}
