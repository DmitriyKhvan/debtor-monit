import { Component, Input } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.scss'],
})
export class StatisticsListComponent {
  @Input() statisticsList: any = [];

  constructor(private flagService: FlagService) {}

  generateStatistics() {
    this.flagService.statisticsForm$.next(true);
  }
}
