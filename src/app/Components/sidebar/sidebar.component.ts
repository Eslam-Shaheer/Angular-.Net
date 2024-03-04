import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  // title: string = 'My Store';

  imgSrc: string = 'https://picsum.photos/200/300';

  isBtnDisabled: boolean = false;

  img: string = 'img';

  imgClasss: string = 'img-class';
  constructor() {
    setTimeout(() => {
      this.isBtnDisabled = true;
    }, 5000);
  }
  classesArr: string[] = [`colorWhite`, `bgRed`];
  getClasses(): string {
    return ` bgRed`;
  }
  blueBg: string = 'blue';
  redBG: string = 'red';
  fontSize: number = 40;

  showImg: boolean = true;

  handeToggleImg() {
    this.showImg = !this.showImg;
  }
}
