import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api/credit.service';
import { KeycloakService } from 'keycloak-angular';
import { WebsocketService } from './shared/api/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Lendo-Deptor';

  constructor(
    private apiService: ApiService,
    private keycloak: KeycloakService,
    private webSocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.keycloak
      .loadUserProfile()
      .then((profile) => {
        this.apiService.profile = profile;
      })
      .catch((error) => {
        // this.alert.danger(
        //   !error.error.message || error.statusText === 'Unknown Error'
        //     ? this.lawsuitService.translate.instant('serverError')
        //     : error.message
        // );
        console.log(error);
      });

    this.webSocketService.listen('hello').subscribe((data) => {
      console.log(data);
    });

    setTimeout(() => {
      this.webSocketService.emit('list', 'test message');
    }, 5000);
  }
}
