import { Component } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';

@Component({
  selector: 'app-statistics-empty',
  templateUrl: './statistics-empty.component.html',
  styleUrls: ['./statistics-empty.component.scss'],
})
export class StatisticsEmptyComponent {
  constructor(private flagService: FlagService) {}

  generateStatistics() {
    this.flagService.statisticsForm$.next(true);
  }
}
