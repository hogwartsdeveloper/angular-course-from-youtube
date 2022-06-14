import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent implements OnInit {

  @Output() onCarAdd = new EventEmitter<string>();
  carName = '';

  constructor() { }

  ngOnInit(): void {
  }

  addCar() {
    this.onCarAdd.emit(this.carName);
    this.carName = ''
  }

}
