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

  charsCount = 5;
  form: FormGroup = new FormGroup({});

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)]),
      }),
      country: new FormControl('kz'),
      answer: new FormControl('yes')
    });
  }

  onSubmit() {
    console.log('Submited!', this.form)
  }

  // {'errorCode': true}
  // null undefined
  checkForLength(control: FormControl) {
    if (control.value.length <= this.charsCount) {
      return {
        lengthError: true
      }
    }

    return null;
  }
}
