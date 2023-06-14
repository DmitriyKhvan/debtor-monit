import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
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

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements AfterViewInit, OnDestroy {
  @ViewChild('page', { static: false, read: ElementRef }) pageRef!: ElementRef;

  pSub!: Subscription;

  constructor(private apiService: ApiService) {}

  pageChanged(currentPage: number) {
    this.apiService.currentPage$.next(currentPage);
  }

  ngAfterViewInit(): void {
    this.pSub = fromEvent(
      this.pageRef.nativeElement.children[0].children[0],
      'keyup'
    )
      .pipe(
        debounceTime(300),
        map((event: any) => {
          return event.target.value;
        }),
        filter((value) => value > 0),
        distinctUntilChanged()
      )
      .subscribe((value: any) => {
        console.log(value);
        this.pageChanged(value);
      });
  }

  ngOnDestroy(): void {
    this.pSub?.unsubscribe();
  }
}
