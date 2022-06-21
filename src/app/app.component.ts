import {Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from "./cars.service";
import {AsyncValidatorFn, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarsService]
})
export class AppComponent implements OnInit {
  cars: any[] = [];

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
  }

  loadCars() {
    this.carsService.getCars().subscribe((response) => {
      console.log(response)
    })
  }
}
