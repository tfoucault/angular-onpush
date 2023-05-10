import 'zone.js/dist/zone';
import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';
import { TooltipComponent } from './tooltip.component';
import { CountComponent } from './count.component';
import { BehaviorSubject } from 'rxjs';
import { DataComponent } from './data.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    HelloComponent,
    TooltipComponent,
    CountComponent,
    DataComponent,
  ],
  template: `
  <button (click)="onClick()">Trigger change detection</button>
  
  <hello [name]="name"></hello>  
  <hr>
  <tooltip [config]="config"></tooltip>
  <hr>
  <count></count>
  <hr>
  <data [items]="data$"></data>
  `,
})
export class App {
  name = 'SFB Team';

  config = { position: 'top' };

  data$ = new BehaviorSubject<string[]>([]);

  onClick() {
    //this.name = 'dear';
    //this.config.position = 'bottom';
    //this.config = { position: 'bottom' };
    //this.data$.next(['some', 'new', 'data']);
  }
}

bootstrapApplication(App);
