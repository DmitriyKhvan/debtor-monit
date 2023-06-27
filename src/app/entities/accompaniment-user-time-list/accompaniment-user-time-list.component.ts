import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  Subscription,
} from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { DicService } from 'src/app/shared/api/dic.service';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-accompaniment-user-time-list',
  templateUrl: './accompaniment-user-time-list.component.html',
  styleUrls: ['./accompaniment-user-time-list.component.scss'],
})
export class AccompanimentUserTimeListComponent implements OnInit, OnDestroy {
  @HostListener('window:beforeunload', ['$event'])
  onBeforUnload() {
    localStorage.clear();
  }

  @Input() filter: string = '';

  @ViewChildren('sorting') sortingRef!: QueryList<ElementRef>;

  creditSub!: Subscription;
  dicSub!: Subscription;
  sSub!: Subscription;
  uSub!: Subscription;
  pSub!: Subscription;

  credits: any = [];
  totalItems: number = 0;
  currentPage: number = 1;
  count: number = 15;
  search: string = '';
  period: string | null = 'month';
  periodBegin: string | null = null;
  periodEnd: string | null = null;

  loading = false;
  sortClass = 'down';

  sortType: string = '';
  sortValue: string = '';
  dic: Status[] = [];

  searchValue: string = '';

  options = [
    { value: 'month', label: 'Месяц' },
    { value: 'quarter', label: 'Квартал' },
    { value: 'half-year', label: 'Пол года' },
    { value: 'year', label: 'Год' },
    { value: 'all', label: 'Все' },
  ];

  constructor(private apiService: ApiService, public dicService: DicService) {}

  ngOnInit(): void {
    this.sSub = this.apiService.search$?.subscribe((search: string) => {
      localStorage.clear();

      this.currentPage = 1;
      this.search = search;
      this.getCredits();
    });

    this.pSub = this.apiService.currentPage$?.subscribe(
      (currentPage: number) => {
        // localStorage.clear();
        localStorage.removeItem('filterDataAccompanimentTime');
        localStorage.removeItem('creditsAccomponimentTime');

        this.currentPage = currentPage;
        this.getCredits();
      }
    );

    this.uSub = this.apiService.updateList$?.subscribe(() => {
      localStorage.clear();
      this.getCredits();
    });

    this.getCredits();

    // this.dicSub = this.dicService
    //   .getDebtorStatus()
    //   .subscribe((dic: Status[]) => {
    //     this.dic = dic;
    //   });

    if (localStorage.getItem('filterDataAccompanimentTime')) {
      const filterDataAccompanimentTime = JSON.parse(
        localStorage.getItem('filterDataAccompanimentTime') || '{}'
      );

      let el = null;

      if (filterDataAccompanimentTime.sortValue) {
        el = document
          .querySelector(`.${filterDataAccompanimentTime.sortValue}`)
          ?.querySelector('span');

        // console.log(
        //   document.querySelector(`.${filterDataAccompanimentTime.sortValue}`)
        // );
      }

      if (filterDataAccompanimentTime.sortType === 'desc') {
        el?.children[0]?.classList.add(
          'aui-icon',
          'aui-icon-small',
          'aui-iconfont-arrow-up-small'
        );
      }

      el?.children[0]?.classList.add(
        'aui-icon',
        'aui-icon-small',
        'aui-iconfont-arrow-down-small'
      );
    }

    if (localStorage.getItem('filterDataAccompanimentUser')) {
      this.searchValue = JSON.parse(
        localStorage.getItem('filterDataAccompanimentUser') || ''
      ).search;
    }
  }

  getCredits() {
    if (
      localStorage.getItem('creditsAccomponimentTime') &&
      localStorage.getItem('filterDataAccompanimentTime')
    ) {
      const creditsData = JSON.parse(
        localStorage.getItem('creditsAccomponimentTime') || '{}'
      );
      const filterData = JSON.parse(
        localStorage.getItem('filterDataAccompanimentTime') || '{}'
      );

      this.credits = creditsData.credits;
      this.currentPage = filterData.currentPage;
      this.count = filterData.count;
      this.sortValue = filterData.sortValue;
      this.sortType = filterData.sortType;
      this.search = filterData.search;
      this.period = filterData.period;
      this.periodBegin = filterData.periodBegin;
      this.periodEnd = filterData.periodEnd;
      this.totalItems = creditsData.totalItems;
      return;
    }

    this.loading = true;
    const data = {
      currentPage: this.currentPage,
      count: this.count,
      sortValue: this.sortValue,
      sortType: this.sortType,
      search: this.search,
      period: this.period,
      periodBegin: this.periodBegin,
      periodEnd: this.periodEnd,
    };

    localStorage.setItem('filterDataAccompanimentTime', JSON.stringify(data));

    this.creditSub = this.apiService.getAccopanimentTime(data).subscribe(
      (credits) => {
        this.credits = credits.list;
        this.totalItems = credits.count;

        this.loading = false;

        localStorage.setItem(
          'creditsAccomponimentTime',
          JSON.stringify({
            credits: credits.list,
            totalItems: credits.count.count,
          })
        );
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  sort(event: any, sortValue: string) {
    localStorage.clear();

    const el = event.target.children[0];
    this.sortValue = sortValue;

    const isSortASC = el.classList.contains('aui-iconfont-arrow-down-small');

    if (!isSortASC) {
      this.resetSortClass();
      el.classList.add(
        'aui-icon',
        'aui-icon-small',
        'aui-iconfont-arrow-down-small'
      );
      this.sortType = 'asc';
    } else {
      this.resetSortClass();
      el.classList.add(
        'aui-icon',
        'aui-icon-small',
        'aui-iconfont-arrow-up-small'
      );

      this.sortType = 'desc';
    }

    this.getCredits();
  }

  resetSortClass() {
    this.sortingRef.forEach((el) => {
      el.nativeElement.className = '';
    });
  }

  setPeriod(event: any) {
    localStorage.removeItem('filterDataAccompanimentTime');
    localStorage.removeItem('creditsAccomponimentTime');

    this.currentPage = 1;
    this.period = event?.value;

    this.periodBegin = null;
    this.periodEnd = null;
    this.getCredits();
  }

  getPeriodDatePickerRange(data: any) {
    localStorage.removeItem('filterDataAccompanimentTime');
    localStorage.removeItem('creditsAccomponimentTime');

    this.currentPage = 1;
    this.periodBegin = data.start;
    this.periodEnd = data.end;
    this.period = null;

    this.getCredits();
  }

  ngOnDestroy(): void {
    this.creditSub?.unsubscribe();
    this.dicSub?.unsubscribe();
    this.sSub?.unsubscribe();
    this.uSub?.unsubscribe();
    this.pSub?.unsubscribe();
  }
}
{
}
