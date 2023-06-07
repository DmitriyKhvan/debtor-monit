import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { FlagService } from 'src/app/shared/api/flag.sevice';
import * as moment from 'moment';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit, OnDestroy {
  sSub!: Subscription;
  slSub!: Subscription;

  flag: boolean = false;

  constructor(
    private flagService: FlagService,
    public apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.sSub = this.flagService.statisticsForm$.subscribe((flag) => {
      this.flag = flag;
    });

    const data = {
      fromDate: moment().date(1).format('DD.MM.YYYY'),
      toDate: moment().format('DD.MM.YYYY'),
    };

    this.slSub = this.apiService.getStatisticsList(data).subscribe();
  }

  ngOnDestroy(): void {
    this.sSub?.unsubscribe();
    this.slSub?.unsubscribe();
  }
}
