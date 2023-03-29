import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})

export class BorderCardDirective {
  private defaultBorderColor = "#000000";
  private defaultCardHeight  = 180;
  private hoverBorderColor   = "#009688";

  constructor(private element: ElementRef) {
    this.setCardHeight(this.defaultCardHeight);
    this.setBorderColor(this.defaultBorderColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("La couleur reçue est " + this.bordercolor)
    this.setBorderColor(this.bordercolor || this.hoverBorderColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor(this.defaultBorderColor);
    this.setBorderNone();
  }

  @Input('pkmnBorderColor') bordercolor: string; // alias
//  @Input() pkmnBorderColor: string; // sans alias

  setCardHeight(height: number) {
    this.element.nativeElement.style.height = `${height}px`;
  }

  setBorderColor(color: string) {
    this.element.nativeElement.style.border = `solid 4px ${color}`;
  }

  setBorderNone() {
    this.element.nativeElement.style.border = `none`;
  }
}
