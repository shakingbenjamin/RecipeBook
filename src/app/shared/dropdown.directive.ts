import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})

// export class DropdownDirective {
//   // allows binding to a property that the element is placed on
//   // so open will be applied when isOpen is true and removed when false.
//   @HostBinding('class.open')isOpen = false;

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }
//   constructor() {}
// }

export class DropdownDirective {
  // allows binding to a property that the element is placed on
  // so open will be applied when isOpen is true and removed when false.
  @HostBinding('class.open') isOpen = false;
  // click anywhere away will close the dropdown
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}