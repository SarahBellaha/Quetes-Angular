import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTargetMovie]'
})
export class TargetMovieDirective {

  @HostBinding('class') className: string = "";

  constructor() { }
  
  @HostListener ('mouseenter') mouseEnterEvent (eventData:Event) {
    this.className = "targeted";
  }

  @HostListener ('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.className = "";
  }

}
