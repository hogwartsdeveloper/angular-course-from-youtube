import {Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from "./services/cars.service";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

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

  form: FormGroup = new FormGroup({});

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', Validators.required),
      country: new FormControl('kz'),
      answer: new FormControl('yes')
    });
  }

  onSubmit() {
    console.log('Submited!', this.form)
  }
}
