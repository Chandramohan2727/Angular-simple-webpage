import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
    @Input() appHighlight = 'yellow';
    private original = '';
    constructor(private el: ElementRef) {
        // el.nativeElement is the DOM node this directive is on
        this.original = this.el.nativeElement.style.backgroundColor;
    }


    @HostListener('mouseenter') onEnter() {
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
    @HostListener('mouseleave') onLeave() {
        this.el.nativeElement.style.backgroundColor = this.original;
    }
}