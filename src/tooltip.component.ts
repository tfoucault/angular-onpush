import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'tooltip',
  standalone: true,
  template: `
    <h1>{{config?.position}}</h1>
    {{runChangeDetection}}
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TooltipComponent {
  @Input() config?: { position: string };

  get runChangeDetection() {
    console.log('Tooltip component - Checking the view');
    return '';
  }
}
