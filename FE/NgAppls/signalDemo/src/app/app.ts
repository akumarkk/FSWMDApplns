import { Component, signal, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements OnInit, OnDestroy {
  protected readonly title = signal('signalDemo');
  counter = 0;

  private timerSubscription?: Subscription;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // interval(1000) emits a value every 1000ms (1 second)
    this.timerSubscription = interval(1000).subscribe((val) => {
      this.counter = val;
      // this.cdr.detectChanges();

    });
  }

  ngOnDestroy() {
    // Clean up the timer when the user leaves the page
    this.timerSubscription?.unsubscribe();
  }
}
