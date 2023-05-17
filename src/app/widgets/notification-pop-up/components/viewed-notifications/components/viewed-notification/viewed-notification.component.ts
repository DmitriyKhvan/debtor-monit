import { Component, Input } from '@angular/core';
import { FlagService } from 'src/app/shared/api/flag.sevice';
import { WebsocketService } from 'src/app/shared/api/websocket.service';

@Component({
  selector: 'app-viewed-notification',
  templateUrl: './viewed-notification.component.html',
  styleUrls: [
    '../../../new-notifications/components/new-notification/new-notification.component.scss',
    './viewed-notification.component.scss',
  ],
})
export class ViewedNotificationComponent {
  @Input() notification: any;

  constructor(
    private webSocketService: WebsocketService,
    private flagService: FlagService
  ) {}

  remove(id: number, event: any) {
    console.log(id);

    event.stopPropagation();

    const data = JSON.stringify({
      id,
      viewedPage: 1,
    });

    this.webSocketService.emit('archive_note', data);
  }
}
