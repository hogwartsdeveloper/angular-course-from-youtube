import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CarsPageComponent} from "./cars-page.component";
import {AuthGuard} from "../services/auth-guard.service";
import {CarPageComponent} from "./car-page/car-page.component";

const carsRoutes: Routes = [
  {
    path: '',
    component: CarsPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id/:name',
        component: CarPageComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(carsRoutes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {}
