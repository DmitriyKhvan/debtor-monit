import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/shared/api/websocket.service';

@Component({
  selector: 'app-viewed-notifications',
  templateUrl: './viewed-notifications.component.html',
  styleUrls: [
    '../new-notifications/new-notifications.component.scss',
    './viewed-notifications.component.scss',
  ],
})
export class ViewedNotificationComponents {
  constructor(public webSocketService: WebsocketService) {}
}
