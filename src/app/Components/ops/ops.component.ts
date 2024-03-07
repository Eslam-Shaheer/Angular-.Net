import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subscribable,
  Subscription,
  first,
  fromEvent,
  map,
  of,
} from 'rxjs';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-ops',
  standalone: true,
  imports: [],
  templateUrl: './ops.component.html',
  styleUrl: './ops.component.css',
})
export class OpsComponent implements OnInit, OnDestroy {
  observable3: Observable<any> = new Observable();
  subsription!: Subscription;

  // observable2: Observable<any> = new Observable();
  // observable: Observable<any> = new Observable();

  ngOnInit() {
    // fromEvent(document, 'click').subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    // });

    // of(1, 2, 3, 4)
    //   .pipe(map((data) => (data < 3 ? data : '')))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });

    // this.observable2 = of('Hello world!');

    this.observable3 = new Observable((observer) => {
      // let count = 0;
      // setInterval(() => {
      //   if (count == 5) observer.complete();
      //   observer.next({ name: 'Hello world!', count });
      //   count++;
      // }, 1000);
      // observer.next(1);
      // observer.next(2);
      // observer.next(3);
      // observer.next(4);
      // observer.error('error');
      // observer.next(5);
      // observer.next(6);
      // observer.next(7);
      // observer.next(8);
      // observer.complete();
    });

    this.subsription = this.observable3.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      },
    });

    // obs.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     console.log('completed');
    //   }
    // );
  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
}
