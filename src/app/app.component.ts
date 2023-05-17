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

    this.webSocketService.listen('new_notification').subscribe((data) => {
      this.webSocketService.new_notifications = data;
    });

    this.webSocketService.emit('new_notification', '1');

    this.webSocketService.listen('viewed_notification').subscribe((data) => {
      this.webSocketService.viewed_notifications = data;
    });

    this.webSocketService.emit('viewed_notification', '1');

    // Пришло новое уведомление!!!
    this.webSocketService.listen('send_note').subscribe((data) => {
      if (data) {
        this.webSocketService.emit('new_notification', '1');

        this.webSocketService.new_notification = 'new_notification';

        const timer = setTimeout(() => {
          this.webSocketService.new_notification = '';
          clearTimeout(timer);
        }, 5000);
      }
    });
  }
}
