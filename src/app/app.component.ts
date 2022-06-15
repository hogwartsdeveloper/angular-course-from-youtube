import {Component, OnInit} from '@angular/core';
import {CarsService} from "./services/cars.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarsService]
})
export class AppComponent implements OnInit {
  answers = [
    {
      type: 'yes',
      text: 'Да'
    },
    {
      type: 'no',
      text: 'Нет'
    }
  ];

  constructor() {
  }

  ngOnInit() {}

  submitForm(form: NgForm) {
    console.log('Submit form', form)
  }
}
