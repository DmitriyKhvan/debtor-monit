import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-customer-requests',
  templateUrl: './customer-requests.component.html',
  styleUrls: ['./customer-requests.component.scss'],
})
export class CustomerRequestsComponent implements OnInit, OnDestroy {
  @Input() pnfl: string = '';
  @ViewChildren('sorting') sortingRef!: QueryList<ElementRef>;

  rSub!: Subscription;
  credits: any = [];

  loading = false;
  sortClass = 'down';

  sortType: string = '';
  sortValue: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getCredits();
  }

  getCredits() {
    this.loading = true;

    const data = {
      currentPage: 1,
      count: 1000000,
      sortValue: this.sortValue,
      sortType: this.sortType,
      search: this.pnfl,
    };

    this.rSub = this.apiService.getAccopanimentCredits(data).subscribe(
      (request) => {
        console.log(request);
        this.credits = request.data.list;

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
    this.rSub?.unsubscribe();
  }
}
