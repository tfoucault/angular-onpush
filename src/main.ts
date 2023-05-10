import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';
import { TooltipComponent } from './tooltip.component';
import { CountComponent } from './count.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HelloComponent, TooltipComponent, CountComponent],
  template: `
  <hello></hello>
  <!--
  <tooltip [config]="config"></tooltip>
  <button (click)="onClick()">Trigger change detection</button>
  <hr>
  <count></count>
  -->
  `,
})
export class App {
  name = 'Angular';

  config = { position: 'top' };

  onClick() {
    this.config.position = 'bottom';

    //this.config = { position: 'bottom' };
  }
}

bootstrapApplication(App);
