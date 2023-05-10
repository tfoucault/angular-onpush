import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  standalone: true,
  template: `
    <h1>Hello {{name}}!</h1>
    {{runChangeDetection}}
  `,
})
export class HelloComponent {
  @Input() name?: string;

  get runChangeDetection() {
    console.log('Hello component - Checking the view');
    return '';
  }
}
