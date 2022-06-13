import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from "@angular/forms";
import { AddCarComponent } from './add-car/add-car.component';
import {BackgroundDirective} from "./directives/background.directive";
import { ColorDirective } from './directives/color.directive';
import {PowPipe} from "./pow.pipe";
import { MyTestPipe } from './my-test.pipe';
import { CarFilterPipe } from './pipe/car-filter.pipe';

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
        CarFilterPipe
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
