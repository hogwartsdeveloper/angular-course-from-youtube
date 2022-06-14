import {
  Component,
  Input,
  OnInit,

} from '@angular/core';
import {ICar} from "../cars/cars.component";
import { ConsoleService } from '../services/console.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements
  OnInit
{
  @Input() car: ICar = { name: 'Vaz', isSold: false};

  constructor(private consoleService: ConsoleService) {

  }

  ngOnInit() {
  }

  getClass() {
    return {
      'list-group-item-success': !this.car?.isSold,
      'list-group-item-danger': this.car?.isSold,
      'list-group-item': true
    }
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy' ? true : false;
    this.consoleService.log(`${this.car.name} status = ${type}`)
  }

}
