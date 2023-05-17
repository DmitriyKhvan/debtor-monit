import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Subscription, filter, fromEvent } from 'rxjs';
import { WebsocketService } from 'src/app/shared/api/websocket.service';

@Component({
  selector: 'app-viewed-notifications',
  templateUrl: './viewed-notifications.component.html',
  styleUrls: [
    '../new-notifications/new-notifications.component.scss',
    './viewed-notifications.component.scss',
  ],
})
export class ViewedNotificationComponents implements OnDestroy, AfterViewInit {
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
        this.webSocketService.emit('viewed_notification', this.page);
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
      this.webSocketService.viewed_notifications.count >
        this.webSocketService.viewed_notifications.data.length
    ) {
      return true;
    }

    return false;
  }

  hideAll() {
    const data = JSON.stringify({
      id: 0,
      viewedPage: 1,
    });
    this.webSocketService.emit('archive_note', data);
  }

  ngOnDestroy(): void {
    this.scrollSub?.unsubscribe();
    this.webSocketService.emit('viewed_notification', '1');
  }
}
