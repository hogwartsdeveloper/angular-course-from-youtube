import {NgModule} from "@angular/core";
import {CarsPageComponent} from "./cars-page.component";
import {CarPageComponent} from "./car-page/car-page.component";
import {CarsService} from "../cars.service";
import {CommonModule} from "@angular/common";
import {CarsRoutingModule} from "./cars-routing.module";

@NgModule({
  declarations: [
    CarsPageComponent,
    CarPageComponent,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  providers: [CarsService]
})
export class CarsModule {}
