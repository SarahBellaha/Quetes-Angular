import { Directive, TemplateRef, ViewContainerRef, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisplayMovies]'
})
export class DisplayMoviesDirective {

  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }

  @Input() set appDisplayMovies(condition: boolean) {
    if(condition){
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }

}
