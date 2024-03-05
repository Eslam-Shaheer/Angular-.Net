import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDraggable]',
  standalone: true,
})
export class DraggableDirective {
  private startX: number = 0;
  private startY: number = 0;
  private x = 0;
  private y = 0;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.position = 'relative';
    this.el.nativeElement.style.cursor = 'move';
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    event.preventDefault();
    this.startX = event.clientX - this.x;
    this.startY = event.clientY - this.y;

    document.addEventListener('mousemove', this.mouseMove);
    document.addEventListener('mouseup', this.mouseUp);
  }

  mouseMove = (event: MouseEvent) => {
    this.x = event.clientX - this.startX;
    this.y = event.clientY - this.startY;

    this.el.nativeElement.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;
  };

  mouseUp = () => {
    document.removeEventListener('mousemove', this.mouseMove);
    document.removeEventListener('mouseup', this.mouseUp);
  };
}
