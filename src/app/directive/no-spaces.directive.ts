import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[noSpaces]'
})
export class NoSpacesDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initialValue = this.el.nativeElement.value;
    const newValue = initialValue.replace(/\s/g, '');
    this.el.nativeElement.value = newValue;
    if (initialValue !== newValue) {
      event.stopPropagation();
      const event2 = new Event('input', { bubbles: true });
      this.el.nativeElement.dispatchEvent(event2);
    }
  }

}
