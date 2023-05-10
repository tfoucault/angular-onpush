import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'count',
  standalone: true,
  imports: [HttpClientModule],
  template: `
    <button (click)="add()">Add</button>
    {{count}}
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CountComponent implements OnInit {
  count = 0;

  constructor(
    private readonly _http: HttpClient,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    setTimeout(() => (this.count = 5), 0);
    Promise.resolve().then(() => (this.count = 5));
    this._http
      .get<any>('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        tap((data) => {
          console.log(data);
          this.count = data.title.length;
          //this._cdr.detectChanges();
        })
      )
      .subscribe();
  }

  add() {
    this.count++;
  }
}
