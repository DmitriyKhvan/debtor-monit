import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/shared/api/websocket.service';

@Component({
  selector: 'app-new-notification',
  templateUrl: './new-notification.component.html',
  styleUrls: ['./new-notification.component.scss'],
})
export class NewNotificationComponent {
  @Input() notification: any;

  constructor(
    private router: Router,
    private webSocketService: WebsocketService
  ) {}

  openNotification(id: number) {
    this.router.navigate([
      '/credit',
      'foreclosure',
      this.notification.claimsId,
    ]);

    this.webSocketService.emit('viewed_note', id);
  }
}
