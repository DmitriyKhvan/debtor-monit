import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-list-item',
  templateUrl: './statistics-list-item.component.html',
  styleUrls: [
    '../../statistics-list.component.scss',
    './statistics-list-item.component.scss',
  ],
})
export class StatisticsListItemComponent {
  @Input() statistic: any;
}
