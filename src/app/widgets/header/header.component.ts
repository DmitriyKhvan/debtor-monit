import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { FlagService } from 'src/app/shared/api/flag.sevice';
import { WebsocketService } from 'src/app/shared/api/websocket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public keycloak: KeycloakService,
    public flagService: FlagService,
    public webSocketService: WebsocketService
  ) {}

  openNotification() {
    this.flagService.isNotifications$.next(true);
  }
}
