import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = "";

  ngOnInit(): void {
    // prend 3 arguments : elementDOM, propriete, valeur.
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow') ;
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.backgroundColor = 'transparent';
  }

}
