import {Component, OnInit} from '@angular/core';
import {animate, AnimationEvent, state, style, transition, trigger} from "@angular/animations";
import {changeWidthTrigger, divTrigger} from "./app.animation";


export interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [divTrigger, changeWidthTrigger]
})
export class AppComponent implements OnInit {
  isVisible = false;

  constructor() {
  }

  ngOnInit() {
  }

  onStart(event: AnimationEvent): void {
    console.log('Start: ', event);
  }

  onDone(event: AnimationEvent): void {
    console.log('End: ', event);
  }
}


