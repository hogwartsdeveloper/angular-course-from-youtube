import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";


export interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '300px',
        height: '300px'
      })),
      state('active', style({
        backgroundColor: 'yellow',
        width: '170px',
        height: '170px'
      })),
      transition('start <=> end', animate('800ms 0.5s ease-out')),
      transition('start => active', animate(400)),
      transition('active => end', animate(400))
    ]),
    trigger('multi', [
      state('start', style({
        width: '150px',
        height: '150px',
        border: '5px solid black'
      })),
      state('end', style({
        width: '170px',
        height: '170px',
        background: 'blue'
      })),
      transition('start <=> end', [
        style({
          background: 'red'
        }),
        animate(1500, style({
          background: 'yellow'
        })),
        animate(1000)
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  clickedState = 'start';
  multiState = 'start';

  constructor() {
  }

  ngOnInit() {
  }

  changeState() {
    this.clickedState = 'end';
    setTimeout(() => {
      this.clickedState = 'start'
    }, 3000)
  }
}


