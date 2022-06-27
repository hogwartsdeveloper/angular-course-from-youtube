import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddCarComponent } from './add-car/add-car.component';
import {BackgroundDirective} from "./directives/background.directive";
import {PowPipe} from "./pow.pipe";
import { MyTestPipe } from './my-test.pipe';
import { CarFilterPipe } from './pipe/car-filter.pipe';
import { CarAddComponent } from './car-add/car-add.component';
import {ConsoleService} from "./services/console.service";
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import {AppRoutingModule} from "./app-routing.module";
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth-guard.service";
import { HeaderComponent } from './header/header.component';
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        CarsComponent,
        CarComponent,
        AddCarComponent,
        BackgroundDirective,
        PowPipe,
        MyTestPipe,
        CarFilterPipe,
        CarAddComponent,
        HomePageComponent,
        NotFoundComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule
    ],
  providers: [ConsoleService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
