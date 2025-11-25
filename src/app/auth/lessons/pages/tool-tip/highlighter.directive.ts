import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  standalone: true
})
export class HighlighterDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    // set a visible background and contrasting text color
    this.renderer.setStyle(this.el.nativeElement, 'background', '#24523d');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#ffffff');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    // remove the styles we added on hover
    this.renderer.removeStyle(this.el.nativeElement, 'background');
    this.renderer.removeStyle(this.el.nativeElement, 'color');
  }

}
