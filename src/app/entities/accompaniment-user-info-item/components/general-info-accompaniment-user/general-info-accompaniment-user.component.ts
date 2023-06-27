import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, filter, first, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';

export interface Application {
  allClaims: number;
  error: number;
  group: string;
  inScoring: number;
  loaned: number;
  merchant: string;
  operator: string;
  phone1: string;
  username: string;
  withLimit: number;
  withoutLimit: number;
}

@Component({
  selector: 'app-general-info-accompaniment-user',
  templateUrl: './general-info-accompaniment-user.component.html',
  styleUrls: ['./general-info-accompaniment-user.component.scss'],
})
export class GeneralInfoAccompanimentUserComponent
  implements OnInit, OnDestroy
{
  @Input() userInfo: any;
  cSub!: Subscription;

  application: Application = {
    allClaims: 0,
    error: 0,
    group: '',
    inScoring: 0,
    loaned: 0,
    merchant: '',
    operator: '',
    phone1: '',
    username: '',
    withLimit: 0,
    withoutLimit: 0,
  };
  loading: boolean = false;
  period: string | null = 'month';
  periodBegin: string | null = null;
  periodEnd: string | null = null;
  username: string = '';

  options = [
    { value: 'month', label: 'Месяц' },
    { value: 'quarter', label: 'Квартал' },
    { value: 'half-year', label: 'Пол года' },
    { value: 'year', label: 'Год' },
    { value: 'all', label: 'Все' },
  ];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCredits();
  }

  getCredits() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.loading = true;
          this.username = params['username'];

          const data = {
            currentPage: 1,
            count: 100,
            search: this.username,
            period: this.period,
            periodBegin: this.periodBegin,
            periodEnd: this.periodEnd,
          };

          return this.apiService.getAccopanimentTime(data);
        }),
        map((res) =>
          res.list.find((item: any) => item.username === this.username)
        )
      )
      .subscribe((res) => {
        this.loading = false;
        this.application = res;
      });
  }

  setPeriod(event: any) {
    this.period = event?.value;

    this.periodBegin = null;
    this.periodEnd = null;
    this.getCredits();
  }

  getPeriodDatePickerRange(data: any) {
    this.periodBegin = data.start;
    this.periodEnd = data.end;
    this.period = null;

    this.getCredits();
  }

  ngOnDestroy(): void {
    this.cSub?.unsubscribe();
  }
}
