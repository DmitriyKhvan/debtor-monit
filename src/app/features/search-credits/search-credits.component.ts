import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/api/credit.service';

@Component({
  selector: 'app-search-credits',
  templateUrl: './search-credits.component.html',
  styleUrls: ['./search-credits.component.scss'],
})
export class SearchCreditsComponent implements OnInit, OnDestroy {
  @ViewChild('search', { static: true, read: ElementRef })
  inputRef!: ElementRef;
  value: string = '';

  sSub!: Subscription;

  constructor(private apiServer: ApiService) {}

  ngOnInit(): void {
    if (localStorage.getItem('filterData')) {
      this.value = JSON.parse(localStorage.getItem('filterData') || '')?.search;
    }

    if (localStorage.getItem('filterDataConfirm')) {
      this.value = JSON.parse(
        localStorage.getItem('filterDataConfirm') || ''
      )?.search;
    }

    // console.log(this.inputRef.nativeElement.children[0].children[0]);

    this.sSub = fromEvent(
      this.inputRef.nativeElement.children[0].children[0],
      'keyup'
    )
      .pipe(
        debounceTime(700),
        map((event: any) => {
          return event.target.value.toLowerCase();
        }),
        distinctUntilChanged()
      )
      .subscribe((value: any) => {
        this.apiServer.search$?.next(value);
      });
  }

  ngOnDestroy(): void {
    this.sSub?.unsubscribe();
  }
}
