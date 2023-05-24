import { Injectable, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { ApiService } from './credit.service';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  new_notifications: any;
  viewed_notifications: any;
  new_notification: string = '';

  socket: any;
  readonly uri: string = `${environment.wsUrl}?username=${this.apiService.profile?.username}`;
  // readonly uri: string = `wss://cc.lendo.uz?username=support_admin`;

  constructor(
    private keycloak: KeycloakService,
    private apiService: ApiService
  ) {
    // this.socket = io(this.uri);

    this.keycloak
      .loadUserProfile()
      .then((profile) => {
        this.apiService.profile = profile;
        this.socket = io(`${environment.wsUrl}?username=${profile.username}`);

        this.listen('connected').subscribe((isConnect) => {
          if (isConnect) {
            this.listen('new_notification').subscribe((data) => {
              this.new_notifications = data;
            });

            this.emit('new_notification', '1');

            this.listen('viewed_notification').subscribe((data) => {
              this.viewed_notifications = data;
            });

            this.emit('viewed_notification', '1');

            // Пришло новое уведомление!!!
            this.listen('send_note').subscribe((data) => {
              if (data) {
                this.emit('new_notification', '1');

                this.new_notification = 'new_notification';

                const timer = setTimeout(() => {
                  this.new_notification = '';
                  clearTimeout(timer);
                }, 5000);
              }
            });
          }
        });
      })
      .catch((error) => {
        // this.alert.danger(
        //   !error.error.message || error.statusText === 'Unknown Error'
        //     ? this.lawsuitService.translate.instant('serverError')
        //     : error.message
        // );
        console.log(error);
      });
  }

  listen(eventName: string) {
    return new Observable((subscribe) => {
      this.socket.on(eventName, (data: any) => {
        subscribe.next(data);
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
