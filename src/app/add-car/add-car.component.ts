import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ICar} from "../cars/cars.component";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  @Output('onAddCar') carEmitter = new EventEmitter<ICar>();
  @ViewChild('carYearInput') carYearInput: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addCar(carNameEl: HTMLInputElement) {
    this.carEmitter.emit({
      name: carNameEl.value,
      year: +this.carYearInput?.nativeElement.value
    });

    carNameEl.value = '';
    // @ts-ignore
    this.carYearInput?.nativeElement.value = 2023;

    console.log(this.carYearInput)
  }

}
