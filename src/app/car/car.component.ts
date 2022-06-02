import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
    <h2>Single Car</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, voluptatem.</p>
  `,
  // styleUrls: ['./car.component.scss']
  styles: [`
    h2 {
      color: aquamarine;
    }
  `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
