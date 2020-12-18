import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appTrimFormFields]'
})
export class TrimFormFieldsDirective {

  constructor(private control: NgControl) { }

  @HostListener('change')
  trimValue() {
    this.control.control.setValue(this.control.value.replace(/^\s+|\s+$/g, '').replace(/\s+/g, " ").trim())
  }

}
