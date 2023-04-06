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

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.scss'],
})
export class CreditListComponent implements OnInit, OnDestroy {
  @ViewChildren('sorting') sortingRef!: QueryList<ElementRef>;

  creditSub!: Subscription;
  credits = [
    {
      id: 1,
      contractId: '180115',
      vendor: 'MEDIAPARK',
      fullname: 'AYTKULOV SHOXZOD TO‘LQIN O‘G‘LI',
      phone: '+998 71 200 50 70',
      phone2: '+998 71 200 50 70',
      createdAt: '05.12.2024',
      creditEnd: '01.03.2020',
      notified: true,
    },
  ];
  totalItems: number = 0;
  currentPage: number = 1;
  count: number = 10;
  loading = false;
  sortClass = 'down';

  sortType: string = '';
  sortValue: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // this.getCredits();
  }

  getCredits() {
    this.loading = true;
    const data = {
      currentPage: this.currentPage,
      count: this.count,
      sortValue: this.sortValue,
      sortType: this.sortType,
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

    if (!el.className) {
      this.resetSortClass();
      el.className = 'uil-sort';

      this.sortType = 'ASC';
    } else {
      this.resetSortClass();
      el.classList.add('uil-sort');

      this.sortType = 'DESC';
    }

    this.getCredits();

    console.log('event', el.className);
    console.log('sortValue', sortValue);
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
  }
}
