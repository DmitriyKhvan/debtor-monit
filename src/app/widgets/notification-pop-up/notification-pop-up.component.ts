import { Component } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';
import { WebsocketService } from 'src/app/shared/api/websocket.service';

@Component({
  selector: 'app-notification-pop-up',
  templateUrl: './notification-pop-up.component.html',
  styleUrls: ['./notification-pop-up.component.scss'],
})
export class NotificationPopUpComponent {
  constructor(
    public webSocketService: WebsocketService,
    public flagService: FlagService
  ) {}

  tab = 'new';

  close() {
    this.flagService.isNotifications$.next(false);
  }

  toggleTab(tabName: string) {
    this.tab = tabName;
  }
}
