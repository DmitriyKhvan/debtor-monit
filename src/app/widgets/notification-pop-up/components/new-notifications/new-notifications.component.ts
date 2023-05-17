import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  tap,
} from 'rxjs';
import { WebsocketService } from 'src/app/shared/api/websocket.service';

@Component({
  selector: 'app-new-notifications',
  templateUrl: './new-notifications.component.html',
  styleUrls: ['./new-notifications.component.scss'],
})
export class NewNotificationComponents implements OnDestroy, AfterViewInit {
  @ViewChild('notification_item') notificationItemRef!: ElementRef;

  scrollSub!: Subscription;
  page: number = 1;

  constructor(public webSocketService: WebsocketService) {}

  ngAfterViewInit(): void {
    this.scrollSub = fromEvent(this.notificationItemRef.nativeElement, 'scroll')
      .pipe(
        // debounceTime(700),

        filter((event: any) => this.getYPosition(event))
        // map((event: any) => event.target.value.toLowerCase()),
        // distinctUntilChanged()
      )
      .subscribe((value: any) => {
        this.page++;
        this.webSocketService.emit('new_notification', this.page);
      });
  }

  getYPosition(e: Event): boolean {
    const el = e.target as Element;
    const scrollTop = el.scrollTop; // длина прокрутки
    const scrollHeight = el.scrollHeight; // длина всего скрола
    const clientHeight = el.clientHeight; // видимая длина элемента

    // console.log('scrollTop', scrollTop);
    // console.log('scrollHeight', scrollHeight);
    // console.log('clientHeight', clientHeight);

    if (
      scrollTop === scrollHeight - clientHeight &&
      this.webSocketService.new_notifications.count >
        this.webSocketService.new_notifications.data.length
    ) {
      return true;
    }

    return false;
  }

  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
    this.webSocketService.emit('new_notification', '1');
  }
}
