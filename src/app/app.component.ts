import {Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from "./services/cars.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarsService]
})
export class AppComponent implements OnInit {
  @ViewChild('form') form: NgForm | undefined;
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

  defaultAnswer = 'no';
  defaultCountry = 'ru';

  formData = {}
  isSubmited = false;

  constructor() {
  }

  ngOnInit() {}

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form?.value;
    this.form?.reset()
  }

  addRandEmail() {
    const randEmail = 'burabai@gmail.com';
    // this.form?.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // })
    this.form?.form.patchValue({
      user: {email: randEmail}
    })
  }
}
