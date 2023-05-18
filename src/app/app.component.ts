import { Component } from '@angular/core';
import { ApiService } from './shared/api/credit.service';
import { KeycloakService } from 'keycloak-angular';
import { WebsocketService } from './shared/api/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Lendo-Deptor';

  constructor(
    private apiService: ApiService,
    private keycloak: KeycloakService,
    private webSocketService: WebsocketService
  ) {}
}
