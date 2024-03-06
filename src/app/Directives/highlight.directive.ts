import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { Colors } from '../Enums/colors';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnChanges {
  @Input() quantity!: number;

  // @HostBinding('style.backgroundColor') backgroundColor: string = '#fff';

  @HostListener('mouseover') onMouseOver() {
    // this.backgroundColor = 'blue';

    this.elementRef.nativeElement.style.boxShadow =
      'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
  }
  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }
  addBorder(
    color: string,
    borderType: string = 'solid',
    borderWidth: string = '2px'
  ) {
    this.elementRef.nativeElement.style.border = `${borderWidth} ${borderType} ${color}`;
  }
  @Input() set appHighlight(value: number) {
    if (value == 1) {
      this.addBorder(Colors.WARNING, 'dashed');
    } else if (value == 2) {
      this.addBorder(Colors.SUCCESS);
    } else if (value == 0) {
      this.addBorder(Colors.ERROR);
    } else {
      this.addBorder('black');
    }
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(
      elementRef.nativeElement,
      'transition-duration',
      '0.3s'
    );

    // const span = this.renderer.createElement('span');
    // const text = this.renderer.createText('Any text');
    // this.renderer.appendChild(span, text);
    // this.renderer.appendChild(elementRef.nativeElement, span);
    // elementRef.nativeElement.style.transitionDuration = '0.3s';
    // elementRef.nativeElement.classList.add('bg-info');

    // elementRef.nativeElement.style.border = '2px dashed black';
    // if (this.quantity == 1) {
    //   elementRef.nativeElement.style.border = '2px dashed yellow';
    // }
    // if (this.quantity == 2) {
    //   elementRef.nativeElement.style.border = '2px dashed blue';
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
