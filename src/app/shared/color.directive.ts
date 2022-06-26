import {Directive, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirectives implements OnInit {
  @HostBinding('style.color') color = 'black'

  constructor() { }

  ngOnInit() {
    this.color = 'blue';
  }

}
