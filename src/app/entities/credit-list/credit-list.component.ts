import {
  Component,
  ElementRef,
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
  @ViewChildren('sorting') sortingRef!: QueryList<ElementRef>;

  creditSub!: Subscription;
  dicSub!: Subscription;

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
  loading = false;
  sortClass = 'down';

  sortType: string = '';
  sortValue: string = '';
  dic: Status[] = [];

  constructor(private apiService: ApiService, public dicService: DicService) {}

  ngOnInit(): void {
    this.getCredits();
    this.dicSub = this.dicService
      .getDebtorStatus()
      .subscribe((dic: Status[]) => {
        this.dic = dic;
      });
  }

  getCredits() {
    this.loading = true;
    const data = {
      currentPage: this.currentPage,
      count: this.count,
      sortValue: this.sortValue,
      sortType: this.sortType,
      search: this.apiService.search,
    };

    this.creditSub = this.apiService.getCredits(data).subscribe(
      (credits) => {
        this.credits = credits.data;
        this.totalItems = credits.count;

        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  sort(event: any, sortValue: string) {
    const el = event.target.children[0];
    this.sortValue = sortValue;

    console.log('el.className', el);

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
    console.log(currentPage);
    this.currentPage = currentPage;
    this.getCredits();
  }

  ngOnDestroy(): void {
    this.creditSub?.unsubscribe();
    this.dicSub?.unsubscribe();
  }
}
