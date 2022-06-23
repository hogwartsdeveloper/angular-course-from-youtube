import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddCarComponent } from './add-car/add-car.component';
import {BackgroundDirective} from "./directives/background.directive";
import { ColorDirective } from './directives/color.directive';
import {PowPipe} from "./pow.pipe";
import { MyTestPipe } from './my-test.pipe';
import { CarFilterPipe } from './pipe/car-filter.pipe';
import { CarAddComponent } from './car-add/car-add.component';
import {ConsoleService} from "./services/console.service";
import { HttpClientModule } from '@angular/common/http';
import {CarsService} from "./cars.service";
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {
    path: 'cars',
    component: CarsPageComponent
  },
  {
    path: '',
    component: HomePageComponent
  }
]

@NgModule({
    declarations: [
        AppComponent,
        CarsComponent,
        CarComponent,
        AddCarComponent,
        BackgroundDirective,
        ColorDirective,
        PowPipe,
        MyTestPipe,
        CarFilterPipe,
        CarAddComponent,
        HomePageComponent,
        CarsPageComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [ConsoleService, CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
