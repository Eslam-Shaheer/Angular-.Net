import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css',
})
export class LifeCycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  firstName: string = 'Eslam';

  constructor() {
    // console.log('constructor');
  }

  /**
   * Important
   */
  ngOnChanges(): void {
    // console.log('ngOnChanges');
  }

  /**
   * Important
   */
  ngOnInit(): void {
    // console.log('ngOnInit');
  }

  //
  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }
  //
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
  }
  //
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }

  /**
   * Important
   */
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
  }

  //
  ngAfterViewChecked(): void {
    // console.log('ngAfterViewInit');
  }

  /**
   * Important
   */
  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
  }
}
