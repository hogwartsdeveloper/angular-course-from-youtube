import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CarsPageComponent} from "./cars-page/cars-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CarPageComponent} from "./car-page/car-page.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "./services/auth-guard.service";

const appRoutes: Routes = [
  {
    path: 'cars',
    component: CarsPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id/:name',
        component: CarPageComponent
      }
    ]
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
