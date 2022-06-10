import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2}
  from "@angular/core";

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  @Input('appBackground') hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent';
  @HostBinding('style.backgroundColor') background: string | undefined;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'blue');
    // this.renderer.addClass(nativeElement, 'white-text')

    this.background = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    // const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
    // this.renderer.removeClass(nativeElement, 'white-text')
    this.background = this.defaultColor;
  }
}
