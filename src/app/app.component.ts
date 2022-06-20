import {Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from "./services/cars.service";
import {AsyncValidatorFn, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarsService]
})
export class AppComponent {
  cars = [
    {
      name: 'Ford',
      color: 'white',
      id: 1
    }
  ];
}
