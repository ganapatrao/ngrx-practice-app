import { style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomToolTip]',
  standalone: true
})
export class CustomToolTipDirective {

  constructor( private rendere : Renderer2, private ele : ElementRef) { }


  @HostListener('mouseenter') 
  onMouseEnter() {
this.showtooltip()
  }
  @HostListener('mouseleave') 
  onMouseLeave() {
    this.hideToolTip()

  }
tooltipDiv :any

  showtooltip(){
 this.tooltipDiv = this.rendere.createElement('div');
     this.tooltipDiv.innerText = "Hi welcome to the tool tip!!"
        this.rendere.setStyle( this.tooltipDiv,'border','1px solid green')
    this.rendere.setStyle( this.tooltipDiv,'color','green')
    this.rendere.appendChild(this.ele.nativeElement, this.tooltipDiv)


  }

  hideToolTip(){
    this.rendere.removeChild(this.ele.nativeElement, this.tooltipDiv)
  }

}
