import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'count',
  standalone: true,
  template: `
    <button (click)="add()">Add</button>
    {{count}}
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CounterComponent {
  count = 0;

  constructor() {
    setTimeout(() => (this.count = 5), 0);

    setInterval(() => (this.count = 5), 100);

    Promise.resolve().then(() => (this.count = 5));

    of(5)
      .pipe(
        tap((value) => {
          this.count = value;
        })
      )
      .subscribe();
  }

  add() {
    this.count++;
  }
}
