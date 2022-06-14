import {ICar} from "../cars/cars.component";
import {ConsoleService} from "./console.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CarsService {
  cars: ICar[] = [
    {name: 'Tesla', isSold: false},
    {name: 'Tulpar', isSold: true},
  ];

  constructor(private consoleService: ConsoleService) {
  }

  addCar(name: string) {
    this.cars.push({
      name,
      isSold: false
    });
    this.consoleService.log(`Машина ${name} была добавлена!`);
  }
}
