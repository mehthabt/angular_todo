import { OnInit } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {
  constructor(private el: ElementRef) { }
  ngOnInit() {
    this.el.nativeElement.focus();
  }
}
