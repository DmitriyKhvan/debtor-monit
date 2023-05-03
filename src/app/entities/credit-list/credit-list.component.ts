import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';
import { DicService } from 'src/app/shared/api/dic.service';
import { Status } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.scss'],
})
export class CreditListComponent implements OnInit, OnDestroy {
  @HostListener('window:beforeunload', ['$event'])
  onBeforUnload() {
    localStorage.clear();
  }

  @ViewChildren('sorting') sortingRef!: QueryList<ElementRef>;

  creditSub!: Subscription;
  dicSub!: Subscription;
  sSub!: Subscription;
  uSub!: Subscription;

  credits: any = [
    // {
    //   claimsDate: '2023-03-28T14:11:54.530Z',
    //   claimsId: 43045,
    //   loanId: '669657',
    //   contractId: '12978844',
    //   vendor: 'ARTEL',
    //   lastname: 'SOBIRJONOV',
    //   firstname: 'RUSTAMJON',
    //   middlename: 'SODIQJON O?G?LI',
    //   phoneFirst: '+998993999847',
    //   phoneSecond: '+998916484848',
    //   contractDate: '28.03.2023',
    //   lastPayDate: null,
    //   status: '',
    // },
  ];
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

    this.uSub = this.apiService.updateList$?.subscribe(() => {
      localStorage.clear();
      this.getCredits();
    });

    this.getCredits();

    this.dicSub = this.dicService
      .getDebtorStatus()
      .subscribe((dic: Status[]) => {
        this.dic = dic;
      });
  }

  getCredits() {
    if (localStorage.getItem('credits') && localStorage.getItem('filterData')) {
      const creditsData = JSON.parse(localStorage.getItem('credits') || '{}');
      const filterData = JSON.parse(localStorage.getItem('filterData') || '{}');

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

    localStorage.setItem('filterData', JSON.stringify(data));

    this.creditSub = this.apiService.getCredits(data).subscribe(
      (credits) => {
        this.credits = credits.data;
        this.totalItems = credits.count;

        this.loading = false;

        localStorage.setItem(
          'credits',
          JSON.stringify({ credits: credits.data, totalItems: credits.count })
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
      this.sortType = 'ASC';
    } else {
      this.resetSortClass();
      el.classList.add(
        'aui-icon',
        'aui-icon-small',
        'aui-iconfont-arrow-up-small'
      );

      this.sortType = 'DESC';
    }

    this.getCredits();
  }

  resetSortClass() {
    this.sortingRef.forEach((el) => {
      el.nativeElement.className = '';
    });
  }

  pageChanged(currentPage: number) {
    localStorage.clear();

    this.currentPage = currentPage;
    this.getCredits();
  }

  ngOnDestroy(): void {
    this.creditSub?.unsubscribe();
    this.dicSub?.unsubscribe();
    this.sSub?.unsubscribe();
    this.uSub?.unsubscribe();
  }
}
