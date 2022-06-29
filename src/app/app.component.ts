import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {divTrigger} from "./app.animation";


export interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [divTrigger]
})
export class AppComponent implements OnInit {
  isVisible = false;

  constructor() {
  }

  ngOnInit() {
  }

}


