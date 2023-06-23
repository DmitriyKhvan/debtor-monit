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
  selector: 'app-accompaniment-user-list',
  templateUrl: './accompaniment-user-list.component.html',
  styleUrls: ['./accompaniment-user-list.component.scss'],
})
export class AccompanimentUserListComponent implements OnInit, OnDestroy {
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

  loading = false;
  sortClass = 'down';

  sortType: string = '';
  sortValue: string = '';
  dic: Status[] = [];
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
        localStorage.removeItem('filterDataAccompanimentUser');
        localStorage.removeItem('creditsAccomponimentUser');

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

    if (localStorage.getItem('filterDataAccompanimentUser')) {
      const filterDataAccompanimentUser = JSON.parse(
        localStorage.getItem('filterDataAccompanimentUser') || '{}'
      );

      let el = null;

      if (filterDataAccompanimentUser.sortValue) {
        el = document
          .querySelector(`.${filterDataAccompanimentUser.sortValue}`)
          ?.querySelector('span');

        // console.log(
        //   document.querySelector(`.${filterDataAccompanimentUser.sortValue}`)
        // );
      }

      if (filterDataAccompanimentUser.sortType === 'desc') {
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
  }

  getCredits() {
    if (
      localStorage.getItem('creditsAccomponimentUser') &&
      localStorage.getItem('filterDataAccompanimentUser')
    ) {
      const creditsData = JSON.parse(
        localStorage.getItem('creditsAccomponimentUser') || '{}'
      );
      const filterData = JSON.parse(
        localStorage.getItem('filterDataAccompanimentUser') || '{}'
      );

      this.credits = creditsData.credits;
      this.currentPage = filterData.currentPage;
      this.count = filterData.count;
      this.sortValue = filterData.sortValue;
      this.sortType = filterData.sortType;
      this.search = filterData.search;
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
    };

    localStorage.setItem('filterDataAccompanimentUser', JSON.stringify(data));

    this.creditSub = this.apiService.getAccopanimentUsers(data).subscribe(
      (credits) => {
        this.credits = credits.list;
        this.totalItems = credits.count.count;

        this.loading = false;

        localStorage.setItem(
          'creditsAccomponimentUser',
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
