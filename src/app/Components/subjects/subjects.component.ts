import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css',
})
export class SubjectsComponent implements OnInit {
  subject: Subject<number> = new Subject<number>();
  behaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Init data'
  );
  observeable!: Observable<number>;

  ngOnInit(): void {
    this.subject.subscribe({
      next: (data) => {
        console.log(`Subscriper 1 recevied data ${data}`);
      },
      error: (error) => {
        console.log(`Subscriper 1 recevied error ${error}`);
      },
      complete: () => {
        console.log(`Subscriper 1 completed`);
      },
    });

    this.subject.subscribe({
      next: (data) => {
        console.log(`Subscriper 2 recevied data ${data}`);
      },
      error: (error) => {
        console.log(`Subscriper 2 recevied error ${error}`);
      },
      complete: () => {
        console.log(`Subscriper 2 completed`);
      },
    });

    this.subject.next(1);
    this.subject.next(2);
    this.subject.next(3);
    this.subject.error('Error');

    this.observeable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.error('Error');
    });

    this.observeable.subscribe({
      next: (data) => {
        console.log(`observeable 1 recevied data ${data}`);
      },
      error: (error) => {
        console.log(`observeable 1 recevied error ${error}`);
      },
      complete: () => {
        console.log(`observeable 1 completed`);
      },
    });

    this.observeable.subscribe({
      next: (data) => {
        console.log(`observeable 2 recevied data ${data}`);
      },
      error: (error) => {
        console.log(`observeable 2 recevied error ${error}`);
      },
      complete: () => {
        console.log(`observeable 2 completed`);
      },
    });

    this.behaviorSubject.subscribe((data) => {
      console.log(data, 'behaviorSubject');
    });
  }
}
