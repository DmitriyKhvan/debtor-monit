import { Component } from '@angular/core';
import { ApiService } from './shared/api/credit.service';
import { KeycloakService } from 'keycloak-angular';
import { WebsocketService } from './shared/api/websocket.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Lendo-Deptor';

  constructor(
    // запускает сервисы
    // private apiService: ApiService,
    private keycloak: KeycloakService,
    private webSocketService: WebsocketService
  ) {
    this.keycloak
      .getToken()
      .then((token) => {
        const tokenDecode: any = jwt_decode(token);
        const time = tokenDecode.exp * 1000 - Date.now();
        setTimeout(() => {
          keycloak.logout();
        }, time);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
