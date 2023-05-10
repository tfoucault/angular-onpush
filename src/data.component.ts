import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'data',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <ul>
      <li *ngFor="let item of _items">{{item}}</li>
    </ul>
  `,
})
export class DataComponent implements OnInit {
  @Input() items!: Observable<string[]>;
  _items!: string[];

  ngOnInit() {
    this.items.subscribe((items) => {
      this._items = items;
    });
  }
}
