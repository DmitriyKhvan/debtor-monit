import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
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
export class SearchCreditsComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild('search', { static: false, read: ElementRef })
  inputRef!: ElementRef;
  @Input() value: string = '';

  sSub!: Subscription;

  constructor(private apiServer: ApiService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
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
